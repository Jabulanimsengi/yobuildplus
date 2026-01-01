// Builder/Contractor Types

// Operating hours for each day of the week
export interface DayHours {
  open: string;    // e.g., "08:00"
  close: string;   // e.g., "17:00"
  closed: boolean; // true if closed on this day
}

export interface OperatingHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

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
  escrowAvailable?: boolean; // Trust signal
  serviceAttributes: ServiceAttribute[];
  callOutFee?: number; // e.g. 500
  hourlyRate?: number; // e.g. 850
  serviceAreas?: string[]; // e.g. ['Sandton', 'Midrand']
  operatingHours?: OperatingHours;
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
  quoteId?: string; // Link to accepted quote
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

// Quote Status Constants
export const QUOTE_STATUS = {
  QUOTE_REQUESTED: 'quote_requested',
  REQUEST_ACCEPTED: 'request_accepted',
  REQUEST_REJECTED: 'request_rejected',
  REQUEST_CONSIDERING: 'request_considering',
  QUOTED: 'quoted',
  QUOTE_ACCEPTED: 'quote_accepted',
  QUOTE_REJECTED: 'quote_rejected',
  COUNTER_PROPOSAL: 'counter_proposal',
  PROJECT_CREATED: 'project_created',
  COMPLETED: 'completed',
} as const;

export type QuoteStatus = typeof QUOTE_STATUS[keyof typeof QUOTE_STATUS];

// Quotation Item
export interface QuotationItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  unit?: string;
  totalPrice: number;
}

// Quote Request
export interface QuoteRequest {
  id: string;
  builderId: string;
  builder?: {
    id: string;
    name: string;
    slug: string;
    logo?: string;
    phone?: string;
    email?: string;
  };
  // Consumer Details
  name: string;
  email: string;
  phone: string;
  location?: string;
  // Project Details
  title?: string;
  message: string;
  status: QuoteStatus;
  // Quotation Response
  totalAmount?: number;
  currency?: string;
  validUntil?: Date;
  notes?: string;
  respondedAt?: Date;
  // Counter-proposal
  proposedAmount?: number;
  proposalNotes?: string;
  parentQuoteId?: string;
  // Items
  items?: QuotationItem[];
  // Project link
  project?: Project;
  // User
  userId?: string;
  createdAt: Date;
  updatedAt?: Date;
}

// Grouped quotes by client
export interface ClientQuoteGroup {
  clientEmail: string;
  clientName: string;
  userId?: string;
  quotes: QuoteRequest[];
  totalQuotes: number;
  acceptedQuotes: number;
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

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
  builderId?: string;
  image?: string;
}

// Admin Stats
export interface AdminStats {
  totalUsers: number;
  pendingSignups: number;
  pendingEdits: number;
  pendingMedia: number;
}

