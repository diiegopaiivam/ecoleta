import express, { request } from 'express';
import multer from 'multer';
import configMulter from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointcontroller = new PointsController();
const itemController = new ItemsController();

const uploads = multer(configMulter);

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json({ message: "Deu certo pivete!" });
});

routes.get('/items', itemController.index);
routes.get('/points', pointcontroller.index);
routes.post('/points', uploads.single('image') , pointcontroller.create);
routes.get('/points/:id',pointcontroller.show);

export default routes;