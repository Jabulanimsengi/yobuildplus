// Builder/Contractor Types
export interface Builder {
  id: string;
  slug: string;
  name: string;
  logo?: string;
  coverImage?: string;
  description: string;
  yearStarted: number;
  teamSize: number;
  projectsCompleted: number;
  categories: Category[];
  subcategories: Subcategory[];
  provinces: Province[];
  city: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  serviceAttributes: ServiceAttribute[];
  callOutFee?: number; // e.g. 500
  hourlyRate?: number; // e.g. 850
  serviceAreas?: string[]; // e.g. ['Sandton', 'Midrand']
  photos: string[];
  projects: Project[];
  reviews: Review[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

// Category structure
export interface Category {
  id: string;
  slug: string;
  name: string;
  icon: string;
  description: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  slug: string;
  name: string;
  parentId: string;
  searchTerms: string[]; // For smart search
}

// South African Provinces
export type Province =
  | 'Gauteng'
  | 'Western Cape'
  | 'KwaZulu-Natal'
  | 'Eastern Cape'
  | 'Free State'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'North West'
  | 'Northern Cape';

export const PROVINCES: Province[] = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Northern Cape',
];

// Service attributes for filtering
export type ServiceAttribute =
  | '24/7 Emergency'
  | 'Commercial'
  | 'Residential'
  | 'Insurance Approved'
  | 'Free Quotes'
  | 'Weekend Available';

export const SERVICE_ATTRIBUTES: ServiceAttribute[] = [
  '24/7 Emergency',
  'Commercial',
  'Residential',
  'Insurance Approved',
  'Free Quotes',
  'Weekend Available',
];

// Project status
export type ProjectStatus = 'ongoing' | 'completed' | 'cancelled';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  images: string[];
  completedAt?: Date;
  province: Province;
  city: string;
}

// Reviews
export interface Review {
  id: string;
  builderId: string;
  authorName: string;
  authorAvatar?: string;
  rating: number;
  comment: string;
  projectType?: string;
  createdAt: Date;
}

// Quote Request
export interface QuoteRequest {
  id: string;
  builderId: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  projectType: string;
  location: Province;
  city: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  createdAt: Date;
}

// Filter state
export interface BuilderFilters {
  category?: string;
  subcategory?: string;
  province?: Province;
  minRating?: number;
  serviceAttributes?: ServiceAttribute[];
  searchQuery?: string;
}
