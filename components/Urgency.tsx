
import React from 'react';
import { ICONS } from '../constants';

const Urgency: React.FC = () => {
  const urgencyCards = [
    {
      title: "Urgences Infrastructures",
      desc: "Nos routes et services publics sont à bout de souffle. Il est temps d'investir massivement pour notre confort quotidien.",
      tag: "Action"
    },
    {
      title: "Chômage Jeunesse",
      desc: "Sainte-Anne perd ses forces vives. Nous devons recréer un écosystème d'emploi local et de formation innovante.",
      tag: "Priorité"
    },
    {
      title: "Sécurité & Cadre de Vie",
      desc: "Retrouvons la sérénité dans nos quartiers. La sécurité n'est pas une option, c'est un droit fondamental pour tous.",
      tag: "Sécurité"
    }
  ];

  return (
    <section id="urgency" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-campaign-magenta/10 rounded-full">
              <ICONS.Urgency />
            </div>
          </div>
          <h2 className="text-4xl font-montserrat font-black text-campaign-navy mb-4">Pourquoi maintenant ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            L'immobilisme n'est plus une option. Sainte-Anne doit entamer sa transformation pour ne pas rater le tournant de 2030.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {urgencyCards.map((card, idx) => (
            <div key={idx} className="group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-campaign-accent transition-all hover:shadow-xl relative">
              <span className="absolute top-4 right-4 bg-campaign-magenta/10 text-campaign-magenta text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {card.tag}
              </span>
              <h3 className="text-2xl font-montserrat font-bold text-campaign-navy mb-4 group-hover:text-campaign-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
              <div className="mt-8 flex justify-end">
                <div className="w-12 h-1 bg-campaign-accent rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Urgency;
