import { Router } from 'express';
import { technologyController } from '../controllers/technology-controller';

const technologyRouter: Router = Router()

technologyRouter.get("/", technologyController.technology);

export { technologyRouter };
