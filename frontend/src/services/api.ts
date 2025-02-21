import axios from "axios";
import { Product } from "../types";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

export const getImageUrl = (companyKey: string, path: string): string => {
  return `https://fazolin.api.forca-de-vendas.integrador.e-catalogos.net/images/${companyKey}/${path}`;
};
