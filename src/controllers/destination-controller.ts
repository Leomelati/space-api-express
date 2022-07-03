import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class DestinationController{

  public createDestination(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public updateDestination(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public destination(req:Request, res:Response, next: NextFunction) {
    return res.json({
      message: 'Hello Destination!'
    });
  }

}

export const destinationController = new DestinationController();