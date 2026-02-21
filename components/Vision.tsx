
import React, { useState } from 'react';
import { ICONS } from '../constants';

const Vision: React.FC = () => {
  const priorities = [
    {
      title: "Économie & Emploi",
      desc: "Revitaliser le centre-ville et les zones d'activités pour que chaque habitant puisse travailler au pays.",
      color: "bg-campaign-blue",
      icon: "💼"
    },
    {
      title: "Éducation & Jeunesse",
      desc: "Des écoles modernes et connectées, des espaces culturels vivants et un soutien sans faille aux étudiants.",
      color: "bg-campaign-orange",
      icon: "🎓"
    },
    {
      title: "Écologie & Tourisme",
      desc: "Protéger notre littoral tout en développant un tourisme durable qui profite directement aux Saint-Annais.",
      color: "bg-campaign-teal",
      icon: "🌿"
    }
  ];

  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <section id="vision" className="py-24 bg-campaign-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-montserrat font-black mb-8 leading-tight">
              Une Vision Claire pour <span className="text-campaign-orange underline decoration-4 underline-offset-8">Sainte-Anne</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Mon engagement est total. Nous avons synthétisé nos réflexions en 3 axes majeurs pour transformer radicalement notre commune.
            </p>
            
            <div className="space-y-6">
              {priorities.map((p, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`shrink-0 w-14 h-14 ${p.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-bold mb-2 group-hover:text-campaign-teal transition-colors">{p.title}</h4>
                    <p className="text-blue-200">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button onClick={() => setShowRoadmap(true)} className="bg-white text-campaign-navy px-10 py-4 rounded-full font-black text-lg hover:bg-campaign-orange hover:text-white transition-all flex items-center gap-3">
                <ICONS.MapPin /> Voir notre feuille de route
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-white/5 rounded-full blur-3xl"></div>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/videoseries?si=i5wQpCVI8Cse1SrE&list=PLD6rcXY0kQ-EyXf1qNI0TBMl2PJhINz-Q" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="relative w-full aspect-video rounded-[2rem] shadow-2xl border-8 border-white/5"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal Feuille de Route */}
      {showRoadmap && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowRoadmap(false)}>
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl animate-fade-in" onClick={e => e.stopPropagation()}>
            <button onClick={() => setShowRoadmap(false)} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src="/feuillederoute.jpeg" alt="Feuille de route Sentann@vantou" className="w-full h-auto max-h-[90vh] object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Vision;
