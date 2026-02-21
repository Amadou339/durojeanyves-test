
import React, { useEffect, useState } from 'react';
import { ICONS, WHATSAPP_LINK } from '../constants';
import { getEvents, SanityEvent } from '../services/sanityService';

const Agenda: React.FC = () => {
  const [events, setEvents] = useState<SanityEvent[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'neighborhood':
        return 'Réunion de Quartier';
      case 'meeting':
        return 'Réunion Publique';
      case 'workshop':
        return 'Atelier Citoyen';
      default:
        return type;
    }
  };

  return (
    <section id="agenda" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-montserrat font-black text-campaign-navy mb-4">Agenda du Terrain</h2>
            <p className="text-lg text-gray-600 max-w-xl">
              Retrouvez-nous près de chez vous pour dialoguer et transformer Sainte-Anne.
            </p>
          </div>
          <button className="bg-campaign-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-campaign-blue transition-colors flex items-center gap-2">
            Voir tout le calendrier
          </button>
        </div>

        <div className="space-y-6">
          {events.length > 0 ? events.map((event) => (
            <div key={event._id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow group">
              <div className="shrink-0 text-center md:w-32">
                <div className="text-campaign-orange font-montserrat font-black text-3xl">
                  {new Date(event.date).toLocaleDateString('fr-FR', { day: '2-digit' })}
                </div>
                <div className="text-campaign-navy font-bold text-xs uppercase">
                  {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                </div>
              </div>
              
              <div className="grow">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full ${
                    event.type === 'meeting' ? 'bg-red-100 text-red-600' : 
                    event.type === 'neighborhood' ? 'bg-campaign-teal/10 text-campaign-teal' : 'bg-green-100 text-green-600'
                  }`}>
                    {getTypeLabel(event.type)}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm gap-1">
                    <ICONS.MapPin /> {event.location}
                  </div>
                </div>
                <h4 className="text-2xl font-montserrat font-bold text-campaign-navy mb-2 group-hover:text-campaign-orange transition-colors">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </div>

              <div className="shrink-0 w-full md:w-auto flex flex-col gap-2">
                <button className="bg-campaign-navy text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-campaign-orange hover:text-white transition-all w-full">
                  M'inscrire
                </button>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="bg-green-50 text-green-700 border border-green-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-green-100 transition-all flex items-center justify-center gap-2 w-full"
                >
                  <ICONS.WhatsApp /> Rappel WhatsApp
                </a>
              </div>
            </div>
          )) : (
            <p className="text-center text-gray-400 py-10">Chargement de l'agenda...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
