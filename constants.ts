import { Building2, SprayCan, PaintBucket, Cpu, Sprout, Briefcase, ShieldCheck, Users, Zap, Award, BarChart3, Clock } from 'lucide-react';
import { Service, Project, Testimonial, NavItem } from './types';

export const COMPANY_NAME = "Belfort Integrated Services";
export const TAGLINE = "One Team, Total Control.";

export const COLORS = {
  red: '#be222e',
  black: '#000000',
  grey: '#57565b',
  white: '#ffffff'
};

export const SERVICES: Service[] = [
  {
    id: 'real-estate',
    title: 'Belfort Real Estate',
    shortDescription: 'Premium property management, sales, and development services.',
    fullDescription: 'We provide end-to-end real estate solutions, from property acquisition and development to management and sales. Our portfolio includes luxury residential properties and high-value commercial spaces in prime Abuja locations.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    features: ['Property Management', 'Real Estate Development', 'Sales & Leasing', 'Investment Advisory']
  },
  {
    id: 'industrial-cleaning',
    title: 'Belfort Industrial Cleaning',
    shortDescription: 'Specialized cleaning for commercial and industrial facilities.',
    fullDescription: 'Our industrial cleaning division uses state-of-the-art technology and eco-friendly products to maintain the highest standards of hygiene for factories, offices, and large-scale facilities.',
    icon: SprayCan,
    image: 'https://images.unsplash.com/photo-1581578731117-104f8a74695b?q=80&w=2070&auto=format&fit=crop',
    features: ['Post-Construction Cleaning', 'Facade Cleaning', 'Industrial Waste Management', 'Fumigation Services']
  },
  {
    id: 'interiors',
    title: 'Belfort Interiors',
    shortDescription: 'Luxury interior design and renovation services.',
    fullDescription: 'Transforming spaces into masterpieces. Our interior design team blends functionality with aesthetics to create breathtaking environments for homes and businesses.',
    icon: PaintBucket,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    features: ['Space Planning', 'Luxury Renovation', 'Custom Furniture', '3D Visualization']
  },
  {
    id: 'tech',
    title: 'Belfort Tech Solutions',
    shortDescription: 'Smart home automation and IT infrastructure.',
    fullDescription: 'Bridging the gap between physical space and digital convenience. We install smart home systems, security networks, and robust IT infrastructure.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    features: ['Smart Home Automation', 'CCTV & Security Systems', 'Network Infrastructure', 'Access Control']
  },
  {
    id: 'agro',
    title: 'Belfort Agro',
    shortDescription: 'Sustainable agricultural investments and supply chain.',
    fullDescription: 'Contributing to food security through sustainable farming practices, supply chain management, and agricultural investment opportunities.',
    icon: Sprout,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop',
    features: ['Crop Production', 'Agro-Processing', 'Supply Chain Logistics', 'Consultancy']
  },
  {
    id: 'integrated',
    title: 'Integrated Solutions',
    shortDescription: 'Holistic facility management combining all disciplines.',
    fullDescription: 'The ultimate Belfort experience. We combine all our verticals to offer a single-source solution for complex facility management needs.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    features: ['Total Facility Management', 'Project Management', 'Consultancy', 'Turnkey Solutions']
  }
];

export const PILLARS = [
  { title: 'Ingenuity', icon: Zap, desc: 'Creative problem solving.' },
  { title: 'Integration', icon: Briefcase, desc: 'Seamless service delivery.' },
  { title: 'Distinction', icon: Award, desc: 'Standing out through quality.' },
  { title: 'Reliability', icon: ShieldCheck, desc: 'Consistent performance.' },
  { title: 'Commitment', icon: Users, desc: 'Dedication to client success.' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Onyx Towers',
    location: 'Maitama, Abuja',
    category: 'Real Estate',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop',
    description: 'A 15-story luxury residential complex featuring smart home integration.'
  },
  {
    id: '2',
    title: 'Apex Industrial Hub',
    location: 'Idu Industrial Layout',
    category: 'Industrial Cleaning',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    description: 'Comprehensive facility management and cleaning for a 50,000sqm factory.'
  },
  {
    id: '3',
    title: 'Villa Serene Renovation',
    location: 'Asokoro, Abuja',
    category: 'Interiors',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop',
    description: 'Complete interior overhaul of a diplomatic residence.'
  },
  {
    id: '4',
    title: 'GreenField Agro Park',
    location: 'Kuje',
    category: 'Agro',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop',
    description: 'Implementation of automated irrigation systems for large scale farming.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Emmanuel Okonkwo',
    role: 'CEO, Zenith Structures',
    content: 'Belfort’s integrated approach saved us time and money. Having one team handle construction cleaning and interior finishing was a game changer.',
    image: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: 2,
    name: 'Aisha Bello',
    role: 'Homeowner',
    content: 'The attention to detail in their real estate development is unmatched in Abuja. Truly a luxury experience from start to finish.',
    image: 'https://picsum.photos/id/1011/100/100'
  },
  {
    id: 3,
    name: 'David West',
    role: 'Facility Manager',
    content: 'Their tech solutions team modernized our security infrastructure seamlessly. Professional and highly skilled.',
    image: 'https://picsum.photos/id/1027/100/100'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' }
];