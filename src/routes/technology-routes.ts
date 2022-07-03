import { Router } from 'express';
import { body } from 'express-validator';
import { technologyController } from '../controllers/technology-controller';

const technologyRouter: Router = Router()

technologyRouter.post("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imageUrl').notEmpty().isString().withMessage('ImageUrl is required'),
  technologyController.createTech
);

technologyRouter.put("/",
  body('name').notEmpty().isString().withMessage('Name is required'),
  body('description').notEmpty().isString().withMessage('Description is required'),
  body('imageUrl').notEmpty().isString().withMessage('ImageUrl is required'),
  technologyController.updateTech
);

technologyRouter.get("/", technologyController.technology);

export { technologyRouter };
