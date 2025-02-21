import { Router, Request, Response } from 'express';
import { getAllProducts, getProductById, getProductColors, getProductImages, getProductSkus } from '../controllers/ProductController';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:id/skus', getProductSkus);
router.get('/:id/images', getProductImages);
router.get('/:id/colors', getProductColors);

export { router };
