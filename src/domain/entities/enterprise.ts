export interface Enterprise {
  id: number;
  email_enterprise: string | null;
  facebook: string | null;
  twitter: string | null;
  linkedin: string | null;
  phone: string | null;
  own_enterprise: boolean;
  enterprise_name: string;
  photo: string | null;
  description: string | null;
  city: string;
  country: string;
  value: number;
  share_price: number;
  enterprise_type: EnterpriseType;
}

export interface EnterpriseType {
  id: number;
  enterprise_type_name: string;
}
