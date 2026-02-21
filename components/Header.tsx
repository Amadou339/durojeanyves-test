
import React, { useState } from 'react';
import { CAMPAIGN_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Vision', href: '#vision' },
    { label: 'Urgence', href: '#urgency' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Mobilisation', href: '#mobilisation' },
  ];

  return (
    <header className="fixed w-full z-50 glass-card border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0 flex items-center gap-4">
            <img 
              src="https://i.postimg.cc/3NB8tQNw/Design_sans_titre_(2).png" 
              alt="Logo Sentann@vantou" 
              className="h-14 w-14 md:h-18 md:w-18 object-contain"
            />
            <span className="font-montserrat text-xl md:text-2xl font-black text-campaign-navy tracking-tighter">
              {CAMPAIGN_NAME}<span className="text-campaign-orange">.</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-campaign-navy/80 font-bold hover:text-campaign-orange transition-colors text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-campaign-navy p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-campaign-navy border-l-4 border-transparent hover:border-campaign-orange hover:bg-gray-50 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
