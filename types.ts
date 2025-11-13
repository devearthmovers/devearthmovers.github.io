
import type { ReactNode } from 'react';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'fleet' | 'safety' | 'careers' | 'contact';

export interface NavLink {
  name: string;
  page: Page;
}

export interface Service {
    icon: ReactNode;
    title: string;
    description: string;
}

export interface Strength {
    id: string;
    title: string;
    description: string;
    icon: ReactNode;
}

export interface Equipment {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

export interface Sector {
    name: string;
    imageUrl: string;
    points: string[];
}
