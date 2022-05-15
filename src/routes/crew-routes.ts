import { Router } from 'express';
import { crewController } from '../controllers/crew-controller';

const crewRouter: Router = Router()

crewRouter.get("/", crewController.crew);

export { crewRouter };
