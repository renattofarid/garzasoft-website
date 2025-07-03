export interface Client {
  id: number;
  nombre: string;
  logo: string;
  imagen_referencia: null | string;
  flyer_bienvenida: null | string;
  flyer_informativo: null | string;
  type: string;
  comment: Comment | null;
  departments: Department[];
  addresses: Address[];
}

export interface Address {
  id: number;
  address: string;
  reference: string;
  department: Department;
}

export interface Department {
  id: number;
  name: string;
}

export interface Comment {
  text: string;
  author: string;
  position: string;
}
