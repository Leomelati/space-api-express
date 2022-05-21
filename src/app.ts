import express from "express";
import { ApiError } from "./models/api-error";
import { crewRouter } from "./routes/crew-routes";
import { destinationRouter } from "./routes/destination-routes";
import { technologyRouter } from "./routes/technology-routes";

export class App {
  public server: express.Application;

  constructor(){
    require('dotenv').config()
    this.server = express();
    this.middleware();
    this.router();
    this.errorHandler()
    this.server.listen(process.env.PORT)
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use('/api/destination', destinationRouter);
    this.server.use('/api/crew', crewRouter);
    this.server.use('/api/technology', technologyRouter);
  }

  private errorHandler() {
    this.server.use(() => {
      const error = new ApiError(404, "Could not find this route.");
      throw error;
    })


    this.server.use((error, req, res, next) => {
      if (res.headersSent)
        return next(error);
      res.status(error.statusCode || 500)
          .json({message: error.message || "An unknown error occurred."});
    });
  }
}

export const app = new App();