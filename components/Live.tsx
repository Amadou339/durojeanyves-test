
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Live: React.FC = () => {
  return (
    <section className="p-6 bg-slate-50 border-y border-slate-100">
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <h3 className="font-montserrat font-black text-[#1B355E] text-xl uppercase tracking-tight">
          En direct de Sainte-Anne
        </h3>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
        <p className="text-slate-700 leading-relaxed italic">
          "Lancement de la dynamique <strong className="text-[#1B355E]">Sentann@vantou</strong>. Ensemble, construisons l'avenir de notre commune pour redonner à Sainte-Anne son éclat d'antan tout en osant le futur."
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-[#1B355E] rounded-2xl p-4 flex gap-4 items-center">
          <div className="bg-white/10 rounded-xl p-3 text-center min-w-[70px]">
             <div className="text-[#FFB81C] font-montserrat font-black text-xl">12</div>
             <div className="text-white/60 text-[10px] uppercase font-bold tracking-widest">FÉV</div>
          </div>
          <div>
            <h4 className="text-white font-bold leading-tight">Réunion Quartier Fouché</h4>
            <p className="text-white/60 text-sm">18h00 - Chez l'habitant</p>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Je souhaite être notifié pour la réunion de Fouché`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[#FFB81C] text-xs font-bold uppercase tracking-widest flex items-center gap-1"
            >
              Me notifier via WhatsApp
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 flex gap-4 items-center opacity-60">
          <div className="bg-slate-100 rounded-xl p-3 text-center min-w-[70px]">
             <div className="text-slate-400 font-montserrat font-black text-xl">19</div>
             <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">FÉV</div>
          </div>
          <div>
            <h4 className="text-[#1B355E] font-bold leading-tight">Grand Meeting</h4>
            <p className="text-slate-500 text-sm">Centre-Ville</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Live;
