
import React, { useEffect, useState } from 'react';
import { getLatestGallery } from '../services/sanityService';

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    getLatestGallery().then(setImages);
  }, []);

  return (
    <section id="galerie" className="py-24 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-black text-campaign-navy mb-4">Derniers Événements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez en images nos dernières rencontres citoyennes et les moments forts de la campagne.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden rounded-3xl group cursor-pointer shadow-lg">
              <img 
                src={img} 
                alt={`Événement ${idx}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-campaign-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">Voir l'album</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
