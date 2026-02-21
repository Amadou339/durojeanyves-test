
import React from 'react';
import { ICONS, SOCIAL_LINKS } from '../constants';

const Mobilization: React.FC = () => {
  return (
    <section id="mobilisation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Volunteer Form */}
          <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-campaign-accent rounded-2xl flex items-center justify-center">
                <ICONS.UserPlus />
              </div>
              <h3 className="text-3xl font-montserrat font-black text-campaign-navy">Devenir Bénévole</h3>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Prénom" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent" required />
                <input type="text" placeholder="Nom" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent" required />
              </div>
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent" required />
              <input type="tel" placeholder="Téléphone (WhatsApp)" className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent" required />
              <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent bg-white">
                <option>Quartier de résidence...</option>
                <option>Centre-Bourg</option>
                <option>Douville</option>
                <option>Ffrench</option>
                <option>Gissac</option>
                <option>Autres...</option>
              </select>
              <textarea placeholder="Comment souhaitez-vous aider ?" rows={4} className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-campaign-accent"></textarea>
              
              <button className="w-full bg-campaign-navy text-white py-5 rounded-2xl font-black text-xl hover:bg-campaign-accent hover:text-campaign-navy transition-all shadow-lg">
                Rejoindre l'équipe !
              </button>
            </form>
          </div>

          {/* Social Hub */}
          <div className="flex flex-col justify-center h-full">
            <div className="bg-campaign-navy text-white rounded-[3rem] p-12 shadow-xl flex flex-col justify-center items-center text-center h-full relative overflow-hidden">
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                    <ICONS.UserPlus className="w-10 h-10 text-campaign-accent" />
                  </div>
                </div>

                <h3 className="text-3xl font-montserrat font-black mb-4">Le Hub Social</h3>
                <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                  Suivez la campagne en temps réel. Photos, vidéos, directs : ne manquez rien de la dynamique <span className="text-campaign-accent font-bold">Sentann@vantou</span>.
                </p>

                <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                  <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="group bg-[#1877F2] hover:bg-[#1877F2]/90 text-white p-4 rounded-2xl font-bold transition-all flex items-center gap-4 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1">
                    <div className="bg-white/20 p-2 rounded-xl"><ICONS.Facebook /></div>
                    <span className="flex-grow text-left">Facebook</span>
                    <ICONS.ChevronRight />
                  </a>

                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-4 rounded-2xl font-bold transition-all flex items-center gap-4 shadow-lg hover:shadow-pink-500/30 hover:-translate-y-1">
                    <div className="bg-white/20 p-2 rounded-xl"><ICONS.Instagram /></div>
                    <span className="flex-grow text-left">Instagram</span>
                    <ICONS.ChevronRight />
                  </a>

                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="group bg-[#FF0000] hover:bg-[#FF0000]/90 text-white p-4 rounded-2xl font-bold transition-all flex items-center gap-4 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1">
                    <div className="bg-white/20 p-2 rounded-xl"><ICONS.YouTube /></div>
                    <span className="flex-grow text-left">YouTube</span>
                    <ICONS.ChevronRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobilization;
