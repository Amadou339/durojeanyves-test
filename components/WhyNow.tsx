
import React from 'react';

const WhyNow: React.FC = () => {
  return (
    <section className="p-6 bg-white border-b border-slate-100">
      <div className="mb-6">
        <h3 className="font-montserrat font-black text-[#1B355E] text-2xl uppercase tracking-tight">
          Pourquoi maintenant ?
        </h3>
        <p className="text-[#D63384] font-bold text-sm uppercase tracking-widest">L'urgence d'agir</p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#1B355E]/10 flex items-center justify-center text-[#1B355E] flex-shrink-0 font-black">1</div>
          <div>
            <h4 className="font-bold text-[#1B355E] leading-tight mb-1">Urgence Économique</h4>
            <p className="text-slate-600 text-sm leading-snug">Redynamiser le commerce local et créer des emplois durables pour nos jeunes.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#FFB81C]/20 flex items-center justify-center text-[#1B355E] flex-shrink-0 font-black">2</div>
          <div>
            <h4 className="font-bold text-[#1B355E] leading-tight mb-1">Sécurité & Cadre de Vie</h4>
            <p className="text-slate-600 text-sm leading-snug">Retrouver une ville sûre, propre et éclairée où il fait bon vivre ensemble.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-[#D63384]/10 flex items-center justify-center text-[#D63384] flex-shrink-0 font-black">3</div>
          <div>
            <h4 className="font-bold text-[#1B355E] leading-tight mb-1">Renouveau Démocratique</h4>
            <p className="text-slate-600 text-sm leading-snug">Une gouvernance transparente et à l'écoute de chaque Saint-Annais.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;