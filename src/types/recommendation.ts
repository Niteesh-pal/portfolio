export interface Recommendation{
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  avatar?: string | null;
  rating: 1|2|3|4|5;
  description: string;
  linkedinUrl?: string;
}