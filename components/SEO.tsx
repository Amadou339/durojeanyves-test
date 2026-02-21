import React, { useEffect } from 'react';
import { SEO_CONFIG } from '../constants';

const SEO: React.FC = () => {
  useEffect(() => {
    // Mise à jour du titre
    document.title = SEO_CONFIG.title;

    // Fonction utilitaire pour mettre à jour ou créer les balises meta
    const setMetaTag = (attr: string, key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description standard
    setMetaTag('name', 'description', SEO_CONFIG.description);

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    setMetaTag('property', 'og:title', SEO_CONFIG.title);
    setMetaTag('property', 'og:description', SEO_CONFIG.description);
    setMetaTag('property', 'og:image', window.location.origin + SEO_CONFIG.image);
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', 'fr_FR');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', SEO_CONFIG.title);
    setMetaTag('name', 'twitter:description', SEO_CONFIG.description);
    setMetaTag('name', 'twitter:image', window.location.origin + SEO_CONFIG.image);
  }, []);

  return null;
};

export default SEO;