
import React from 'react';
import { SOCIALS, CONTACT_INFO } from '../constants';

const ContactHub: React.FC = () => {
  return (
    <section id="contact" className="p-6 bg-slate-50 border-t border-slate-100">
      <div className="text-center mb-8">
        <h3 className="font-montserrat font-black text-[#1B355E] text-2xl uppercase tracking-tight mb-2">
          Le Hub Militant
        </h3>
        <p className="text-slate-500 text-sm">Rejoignez la dynamique et participez au changement.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {SOCIALS.map((social) => (
          <a 
            key={social.platform} 
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#1B355E] group-hover:border-[#1B355E] transition-all group-hover:shadow-md">
              <social.icon className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#1B355E]">
              {social.platform}
            </span>
          </a>
        ))}
      </div>

      <div className="space-y-4">
        <a 
          href={CONTACT_INFO.gmb}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs font-bold text-[#1B355E] underline mb-4"
        >
          📍 Nous trouver sur Google Maps
        </a>

        <a 
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all active:scale-95"
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm p-1.5">
            <img 
              src="https://i.postimg.cc/tg7qhxjY/whatsapp-png-logo-1.png" 
              alt="WhatsApp" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h4 className="font-bold text-[#1B355E] text-sm">Rejoindre le Groupe WhatsApp</h4>
            <p className="text-xs text-slate-500">Infos exclusives & actions militantes</p>
          </div>
        </a>

        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Je souhaite devenir bénévole pour la campagne !`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all active:scale-95 text-left"
        >
          <div className="w-12 h-12 rounded-full bg-[#D63384] flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div>
            <h4 className="font-bold text-[#1B355E] text-sm">Devenir Bénévole</h4>
            <p className="text-xs text-slate-500">Rejoignez l'équipe de terrain</p>
          </div>
        </a>

        <a 
          href="#" // Lien vers plateforme de don légale
          className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all active:scale-95 text-left"
        >
          <div className="w-12 h-12 rounded-full bg-[#FFB81C] flex items-center justify-center text-[#1B355E]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div>
            <h4 className="font-bold text-[#1B355E] text-sm">Faire un don</h4>
            <p className="text-xs text-slate-500">Soutenir financièrement la campagne</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactHub;
