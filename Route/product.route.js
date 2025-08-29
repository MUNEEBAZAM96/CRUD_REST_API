
import express from 'express';
import { getProducts, getProduct, postProduct, deleteproduct, putProduct } from '../Controller/Product.Controller.js';
const router = express.Router();





router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/:id', putProduct);
router.delete('/:id', deleteproduct);

export default router;