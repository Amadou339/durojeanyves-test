
import React from 'react';
import { CANDIDATE_NAME, SLOGAN, ICONS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden gradient-hero">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="0" r="40" fill="white" />
          <circle cx="100" cy="100" r="30" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-campaign-orange font-montserrat font-bold text-xl mb-4 tracking-widest uppercase">
              Jean Yves DURO 2026
            </h2>
            <h1 className="text-5xl lg:text-7xl font-montserrat font-black leading-tight mb-6">
              {SLOGAN}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter font-medium">
              Rejoignez le mouvement <span className="text-campaign-orange font-bold">Sentann@vantou</span> pour une commune dynamique, sûre et solidaire. Ensemble, bâtissons l'avenir de Sainte-Anne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#mobilisation" 
                className="bg-campaign-orange text-white px-8 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
              >
                Je me mobilise <ICONS.ChevronRight />
              </a>
              <a 
                href="#vision" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Découvrir le programme
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-campaign-teal/20 rounded-full blur-3xl group-hover:bg-campaign-teal/30 transition-all"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] bg-gray-800">
              <img 
                src="https://i.postimg.cc/MKwbHCQ3/Design-sans-titre-(3).png" 
                alt={CANDIDATE_NAME}
                className="w-full h-full object-cover object-center grayscale-0 hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/duro/800/1000";
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-campaign-navy/90 to-transparent">
                <p className="text-white font-montserrat font-black text-2xl">{CANDIDATE_NAME}</p>
                <p className="text-campaign-orange font-bold">Candidat à la mairie de Sainte-Anne</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
