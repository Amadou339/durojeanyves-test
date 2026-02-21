import React, { useEffect, useState } from 'react';
import { ICONS } from '../constants';

const InstallPWA: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      console.log('beforeinstallprompt déclenché');
      e.preventDefault();
      setDeferredPrompt(e);
    };
    
    // Pour Chrome Android, on s'assure que le prompt est capté même si l'app est lancée depuis longtemps
    window.addEventListener('beforeinstallprompt', handler);
    
    // Détection si déjà installé
    window.addEventListener('appinstalled', () => {
      console.log('PWA installée');
      setDeferredPrompt(null);
    });

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      // Détection iOS pour message spécifique
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      if (isIOS) {
        alert("Sur iOS, cliquez sur l'icône de partage en bas de votre écran, puis sur 'Sur l'écran d'accueil'.");
      } else {
        alert("L'installation automatique n'est pas supportée par votre navigateur actuel ou l'application est déjà installée. Vous pouvez généralement l'installer via le menu (⋮) de votre navigateur.");
      }
      return;
    }
    
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`Réponse de l'utilisateur: ${outcome}`);
      setDeferredPrompt(null);
    } catch (err) {
      console.error("Erreur lors de l'installation:", err);
    }
  };

  return (
    <section className="bg-campaign-orange py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-montserrat font-black text-white mb-2">Restez connecté avec Sentann@vantou</h3>
          <p className="text-white/90 text-lg">Installez l'application officielle pour suivre la campagne en temps réel.</p>
        </div>
        <button onClick={handleInstall} className="bg-white text-campaign-orange px-8 py-4 rounded-full shadow-xl font-black text-lg flex items-center gap-3 hover:bg-campaign-navy hover:text-white transition-all transform hover:scale-105">
          <ICONS.Download />
          Installer l'application
        </button>
      </div>
    </section>
  );
};

export default InstallPWA;