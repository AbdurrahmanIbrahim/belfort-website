import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}