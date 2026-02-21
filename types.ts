
export interface CampaignEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'meeting' | 'neighborhood' | 'workshop';
}

export interface Priority {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
