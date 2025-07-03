export interface ClientResource {
  id: number;
  nombre: string;
  logo: string;
  imagen_referencia?: string;
  flyer_bienvenida?: string;
  flyer_informativo?: string;
  type: string;
  comment?: any;
  departments: Department[];
  addresses: Address[];
}

export interface Address {
  id: number;
  address: string;
  reference: null;
  department: Department;
}

export interface Department {
  id: number;
  name: string;
}
