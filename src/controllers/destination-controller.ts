import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/api-error";

class DestinationController{

  public destination(req:Request, res:Response, next: NextFunction) {
    return next(new ApiError(404, "Destination not found"));
    return res.json({
      message: 'Hello Destination!'
    });
  }

}

export const destinationController = new DestinationController();