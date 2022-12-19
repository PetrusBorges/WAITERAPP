// PathNode
import path from 'node:path';

// Routes
import { Router } from 'express';

// Multer
import multer from 'multer';

// useCases
import { listCategories } from './useCases/categories/listCategories';
import { createCategory } from './useCases/categories/createCategory';
import { cancelCategory } from './useCases/categories/cancelCategory';
import { listProducts } from './useCases/products/listProducts';
import { createProducty } from './useCases/products/createProduct';
import { cancelProduct } from './useCases/products/cancelProduct';
import { listProductsByCategories } from './useCases/products/listProductsByCategories';
import { listOrders } from './useCases/orders/listOrders';
import { createOrder } from './useCases/orders/createOrder';
import { changeOrderStatus } from './useCases/orders/changeOrderStatus';
import { cancelOrder } from './useCases/orders/cancelOrder';

// Routes
export const router = Router();

// Multer = uploadImage
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// List Categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// Delete/Cancel Category
router.delete('/categories/:categoryId', cancelCategory);

// List Products
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('image'), createProducty);

// Delete/Cancel Product
router.delete('/products/:productsId', cancelProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change Order Status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/Cancel Order
router.delete('/orders/:orderId', cancelOrder);
