import { Router } from 'express';
import { destinationController } from '../controllers/destination-controller';

const destinationRouter: Router = Router()

destinationRouter.get("/", destinationController.destination);

export { destinationRouter };
