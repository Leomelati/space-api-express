import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/api-error";

class DestinationController{

  public createDestination(req:Request, res:Response, next: NextFunction) {
    return res.json(req.body);
  }

  public destination(req:Request, res:Response, next: NextFunction) {
    return res.json({
      message: 'Hello Destination!'
    });
  }

}

export const destinationController = new DestinationController();