export type Language = 'EN' | 'ES';

export type Theme = 'light' | 'dark';

export type TabId = 'home' | 'experience' | 'stack' | 'leadership' | 'connect';

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  challenge: string;
  architecture: string[];
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  image: string;
  imageCaption: string;
  liveTag?: string;
  details?: {
    overview: string;
    keyAchievements: string[];
    diagramTitle: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warn' | 'system';
  text: string;
}
