import { Router } from 'express';

import Products from './controllers/products';

const routes = Router();

routes.get('/catalog', Products.index);

export default routes;
