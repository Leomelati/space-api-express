import { Router } from 'express';
import { destinationController } from '../controllers/destination-controller';
import { checkSchema  } from 'express-validator';

const destinationRouter: Router = Router()

destinationRouter.post("/",
  checkSchema({
    name: {
      in: "body",
      exists: true,
      isString: true,
      errorMessage: "Name is required"
    },
    description: {
      in: "body",
      exists: true,
      isString: true,
      errorMessage: "Description is required"
    },
    imageUrl: {
      in: "body",
      exists: true,
      isString: true,
      errorMessage: "ImageUrl is required"
    },
    Distance: {
      in: "body",
      exists: true,
      isString: true,
      errorMessage: "Distance is required"
    },
    travelTime: {
      in: "body",
      exists: true,
      isString: true,
      errorMessage: "TravelTime is required"
    },
  }),
  destinationController.createDestination
);

destinationRouter.get("/", destinationController.destination);

export { destinationRouter };
