
import React from 'react';
import { ICONS, WHATSAPP_LINK } from '../constants';

const WhatsAppSticky: React.FC = () => {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
      title="Contacter la permanence"
    >
      <ICONS.WhatsApp />
      <span className="absolute -top-2 -right-1 bg-campaign-magenta text-white text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-white animate-bounce shadow-md">
        Échangeons
      </span>
    </a>
  );
};

export default WhatsAppSticky;
