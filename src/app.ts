import express from 'express';
import ProductController from './controller/ProductsController';
// import validateProduct from './middlewares/product.middleware';
import UserController from './controller/UserController';
import OrderController from './controller/OrderController';

const app = express();

app.use(express.json());

const productsControllers = new ProductController();
app.post('/products', productsControllers.create);
app.get('/products', productsControllers.getProducts);

const userControllers = new UserController();
app.post('/users', userControllers.create);

const ordersControllers = new OrderController();
app.get('/orders', ordersControllers.getOrders);

export default app;
