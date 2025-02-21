export interface Product {
  id: number;
  name: string;
  reference: string;
  price: number | null;
  category: string | null;
  description: string | null;
  brand: string | null;
  gender: string | null;
  stock: number | null;
  type: string | null;
  subcategory: string | null;
  prompt_delivey: boolean;
  images: Image[];
  colors: Color[];
  skus: Sku[];
}

export interface Image {
  id: number;
  path: string;
  order: number;
  product_id: number;
  company_key: string | null;
}

export interface Color {
  id: number;
  name: string;
  rgb: string | null;
  hex_code: string | null;
  product_id: number;
}

export interface Sku {
  id: number;
  size: string;
  stock: number;
  product_id: number;
  min_quantity: number;
  open_grid: boolean;
  id_erp: string | null;
}
