import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const serializeData = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(item => serializeData(item));
  }
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        typeof value === 'bigint' ? value.toString() : serializeData(value)
      ])
    );
  }
  return data;
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      include: {
        images: true,
        colors: true,
        skus: true,
      },
    });
    const serializedProducts = serializeData(products);
    res.json(serializedProducts);
  } catch (error: any) {
    res.status(500).json({ error: "Erro ao buscar produtos", details: error.message });
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const product = await prisma.products.findUnique({
      where: { id: Number(id) },
      include: {
        images: true,
        colors: true,
        skus: true,
      },
    });
    if (!product) {
      res.status(404).json({ error: "Produto não encontrado" });
    }

    const serializedProduct = serializeData(product);
    res.json(serializedProduct);
  } catch (error:any) {

    res.status(500).json({ error: "Erro ao buscar produto", details: error.message });
  }
};

export const getProductSkus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const skus = await prisma.skus.findMany({
      where: { product_id: Number(id) },
    });

    const serializedSkus = serializeData(skus);
    res.json(serializedSkus);
  } catch (error: any) {
    res.status(500).json({ error: "Erro ao buscar SKUs", details: error.message });
  }
};

export const getProductImages = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const images = await prisma.images.findMany({
      where: { product_id: Number(id) },
      orderBy: { order: "asc" },
    });
    
    const serializedImages = serializeData(images);
    res.json(serializedImages);
  } catch (error: any) {
   
    res.status(500).json({ error: "Erro ao buscar imagens", details: error.message });
  }
};

export const getProductColors = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const colors = await prisma.colors.findMany({
      where: { product_id: Number(id) },
    });
    const serializedColors = serializeData(colors);
    res.json(serializedColors);
  } catch (error:any) {
    res.status(500).json({ error: "Erro ao buscar cores", details: error.message });
  }
};
