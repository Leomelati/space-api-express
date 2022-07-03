import { Router } from 'express';
import { body } from 'express-validator';
import { crewController } from '../controllers/crew-controller';

const crewRouter: Router = Router()

crewRouter.post("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imageUrl').notEmpty().isString().withMessage('ImageUrl is required'),
  body('role').notEmpty().isString().withMessage('Role is required'),
  crewController.createCrew
);

crewRouter.put("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imageUrl').notEmpty().isString().withMessage('ImageUrl is required'),
  body('role').notEmpty().isString().withMessage('Role is required'),
  crewController.updateCrew
);

crewRouter.get("/", crewController.crew);

export { crewRouter };
