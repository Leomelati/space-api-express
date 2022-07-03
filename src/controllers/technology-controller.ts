import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class TechnologyController{

  public createTech(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public updateTech(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(errors.mapped());

    return res.json(req.body);
  }

  public technology(req:Request, res:Response, next: NextFunction) {
    return res.json({
      message: 'Hello Tech!'
    });
  }

}

export const technologyController = new TechnologyController();