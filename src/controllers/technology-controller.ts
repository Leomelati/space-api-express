import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/api-error";

class TechnologyController{

  public technology(req:Request, res:Response, next: NextFunction) {
    return next(new ApiError(404, "Technology not found"));
    return res.json({
      message: 'Hello Tech!'
    });
  }

}

export const technologyController = new TechnologyController();