
/**
 * Configuration pour l'intégration Sanity.io
 * Remplacez les IDs par vos propres IDs de projet Sanity une fois le studio créé.
 */

export const SANITY_CONFIG = {
  projectId: process.env.SANITY_PROJECT_ID || 'votre_project_id',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
};

// Types pour Sanity
export interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'meeting' | 'neighborhood' | 'workshop';
}

export interface SanityPost {
  _id: string;
  title: string;
  publishedAt: string;
  mainImage: string; // URL
  content: string;
}

/**
 * Note: Ces fonctions simulent l'appel Sanity. 
 * Une fois les credentials configurés, utilisez client.fetch(query)
 */
export async function getEvents(): Promise<SanityEvent[]> {
  // Simule un fetch Sanity
  return [
    {
      _id: '1',
      title: "Rencontre Poirier",
      date: "2026-02-21T18:30:00Z",
      location: "Maison Marie-Joseph, Poirier",
      description: "Discussion ouverte avec les habitants du quartier Poirier sur le projet de mandature.",
      type: 'neighborhood'
    },
    {
      _id: '2',
      title: "Secteur French Mathias",
      date: "2026-02-22T18:30:00Z",
      location: "Quartier French Mathias",
      description: "Présentation des mesures spécifiques pour French Mathias et ses environs.",
      type: 'neighborhood'
    }
  ];
}

export async function getLatestGallery(): Promise<string[]> {
  // Simule la récupération d'images de Sanity
  return [
    "https://picsum.photos/seed/event1/800/600",
    "https://picsum.photos/seed/event2/800/600",
    "https://picsum.photos/seed/event3/800/600",
    "https://picsum.photos/seed/event4/800/600"
  ];
}
