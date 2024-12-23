export type User = {
  created_at: number;
  has_accepted_terms: boolean;
  id: string;
  is_guest: boolean;
  linked_accounts: {
    address: string;
    first_verified_at: number;
    latest_verified_at: number;
    type: string;
    verified_at: number;
  }[];
  mfa_methods: any[];
} | null;

export interface UserContextType {
  user: User;
  login: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
}
