import { Router } from 'express';
import { destinationController } from '../controllers/destination-controller';
import { body } from 'express-validator';

const destinationRouter: Router = Router()

destinationRouter.post("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imagePath').notEmpty().isString().withMessage('imagePath is required'),
  body('distance').notEmpty().isString().withMessage('Distance is required'),
  body('travelTime').notEmpty().isString().withMessage('TravelTime is required'),
  destinationController.createDestination
);

destinationRouter.put("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imagePath').notEmpty().isString().withMessage('imagePath is required'),
  body('distance').notEmpty().isString().withMessage('Distance is required'),
  body('travelTime').notEmpty().isString().withMessage('TravelTime is required'),
  destinationController.updateDestination
);

export { destinationRouter };
