
import React from 'react';
import { CAMPAIGN_NAME, CANDIDATE_NAME, SOCIAL_LINKS, ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-campaign-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-montserrat text-3xl font-black tracking-tighter mb-6 block">
              {CAMPAIGN_NAME}<span className="text-campaign-accent">.</span>
            </span>
            <p className="text-blue-200 max-w-sm mb-8">
              Mouvement citoyen pour le renouveau de Sainte-Anne. Jean Yves DURO porte une ambition forte pour chaque quartier, chaque famille.
            </p>
            <div className="flex gap-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                const Icon = 
                  platform === 'facebook' ? ICONS.Facebook :
                  platform === 'instagram' ? ICONS.Instagram :
                  platform === 'youtube' ? ICONS.YouTube : null;
                
                if (!Icon) return null;

                return (
                  <a 
                    key={platform} 
                    href={url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-campaign-accent hover:text-campaign-navy hover:border-transparent transition-all"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-blue-200">
              <li><a href="#vision" className="hover:text-campaign-accent transition-colors">Vision</a></li>
              <li><a href="#urgency" className="hover:text-campaign-accent transition-colors">Urgence</a></li>
              <li><a href="#agenda" className="hover:text-campaign-accent transition-colors">Agenda</a></li>
              <li><a href="#mobilisation" className="hover:text-campaign-accent transition-colors">Mobilisation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-blue-200">
              <li>Permanence de Sainte-Anne</li>
              <li>contact@jeanyvesduro2026.fr</li>
              <li>WhatsApp: +590 690 00 00 00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-blue-400 gap-4">
          <p>© 2026 Mouvement {CAMPAIGN_NAME}. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Contact Presse</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
