import express, { request } from 'express';

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const pointcontroller = new PointsController();
const itemController = new ItemsController();

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ message: "Deu certo pivete!" });
});

routes.get('/items', itemController.index);
routes.get('/points', pointcontroller.index);
routes.post('/points', pointcontroller.create);
routes.get('/points/:id',pointcontroller.show);

export default routes;