import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/api-error";

class CrewController{

  public crew(req: Request, res: Response, next: NextFunction) {
    return next(new ApiError(404, "Crew not found"));
    return res.json({
      message: 'Hello Crew!'
    });
  }

}

export const crewController = new CrewController();
