
import React, { useState, useEffect } from 'react';

const SmartInteraction: React.FC = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [notifSupported, setNotifSupported] = useState(false);
    const [notifPermission, setNotifPermission] = useState('default');

    useEffect(() => {
        // Écoute pour l'installation
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        });

        // Vérification support notifications
        if ('Notification' in window) {
            setNotifSupported(true);
            setNotifPermission(Notification.permission);
        }
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) {
            alert("Utilisez le menu de votre navigateur pour installer l'appli ou cliquez sur 'Partager' sur iPhone.");
            return;
        }
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') setDeferredPrompt(null);
    };

    const handleNotify = async () => {
        if (!notifSupported) {
            alert("Les notifications ne sont pas supportées par votre navigateur.");
            return;
        }
        const permission = await Notification.requestPermission();
        setNotifPermission(permission);
        if (permission === 'granted') {
            new Notification("Sentann@vantou", {
                body: "Félicitations ! Vous recevrez désormais nos alertes de campagne.",
                icon: "/logosentannavantou.jpeg"
            });
        }
    };

    return (
        <section className="bg-campaign-navy py-16 text-white px-4 border-t-4 border-campaign-orange">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Votre Campagne Digitalisée</h3>
                <p className="text-xl opacity-80 mb-10">Restez informé en temps réel des actions de Jean Yves DURO.</p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    {/* Bouton Install */}
                    <button onClick={handleInstall} className="bg-campaign-orange text-white px-8 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-2">
                        <span>📲</span> Installer l'Appli
                    </button>

                    {/* Bouton Notification */}
                    {notifPermission !== 'granted' && (
                        <button onClick={handleNotify} className="bg-white text-campaign-navy px-8 py-5 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all text-lg flex items-center justify-center gap-2 border-2 border-campaign-orange">
                            <span>🔔</span> Activer les Alertes
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SmartInteraction;
