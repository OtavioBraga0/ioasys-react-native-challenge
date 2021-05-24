export interface DomainUser {
  investor: {
    id: number;
    investor_name: string;
    email: string;
    city: string;
    country: string;
    balance: number;
    photo?: string;
    portfolio: {
      enterprises_number: number;
      enterprises: number[];
    };
    portfolio_value: number;
    first_access: boolean;
    super_angel: boolean;
  };
  enterprise?: string;
  success: boolean;
}

export interface AuthCredentials {
  'access-token': string;
  client: string;
  uid: string;
}

export const NOT_LOGGED_IN_USER = null;
