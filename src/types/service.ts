export interface ServiceFeature {
  id: number;
  service_id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  button_link: string;
  created_at: string;
  updated_at: string;
  features: ServiceFeature[];
}

export interface ServicesResponse {
  success: boolean;
  data: Service[];
  message: string;
}
