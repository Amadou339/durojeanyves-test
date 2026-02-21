
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Urgency from './components/Urgency';
import Vision from './components/Vision';
import Agenda from './components/Agenda';
import Gallery from './components/Gallery';
import Mobilization from './components/Mobilization';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';
import InstallPWA from './components/InstallPWA';
import SEO from './components/SEO';

function App() {
  // Initialisation OneSignal pour les notifications Push
  useEffect(() => {
    const initOneSignal = async () => {
      try {
        // @ts-ignore
        const OneSignal = window.OneSignal || [];
        if (OneSignal && typeof OneSignal.push === 'function') {
          OneSignal.push(function() {
            // Remplacez par votre App ID OneSignal réel dans vos variables d'environnement
            OneSignal.init({
              appId: "VOTRE_APP_ID_ONESIGNAL", 
              safari_web_id: "VOTRE_SAFARI_ID",
              notifyButton: {
                enable: true,
              },
              allowLocalhostAsSecureOrigin: true,
            });
          });
        }
      } catch (err) {
        console.warn("OneSignal initialization failed or blocked by extension:", err);
      }
    };
    initOneSignal();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-10 relative overflow-x-hidden">
      {/* Scrolling Notification Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] gradient-logo-warm text-white py-2 marquee-container shadow-md border-b border-white/10">
        <div className="animate-marquee inline-block">
          <span className="font-bold text-sm px-12">
            📢 Prochaine réunion de quartier le 21 février : Poirier / Maison Marie-Joseph — Rejoignez-nous pour transformer Sainte-Anne !
          </span>
          <span className="font-bold text-sm px-12">
            📢 Participez à la co-construction du programme : Rendez-vous sur notre groupe WhatsApp !
          </span>
          <span className="font-bold text-sm px-12">
            📢 Jean Yves DURO à votre rencontre : Secteur French Mathias le 22 février à 18h30.
          </span>
        </div>
      </div>

      <Header />
      <SEO />
      
      <main className="flex-grow">
        <Hero />
        <Urgency />
        <Vision />
        <Agenda />
        <Gallery />
        <Mobilization />
        <InstallPWA />
      </main>

      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppSticky />
    </div>
  );
}

export default App;
