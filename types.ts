import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
  detail: string; // Used for tooltip/popover
}

export interface Startup {
  name: string;
  category: string;
  logoUrl: string; // Placeholder URL
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}