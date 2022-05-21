import { NextFunction, Request, Response } from "express";
import { ApiError } from "../models/api-error";

class CrewController{

  public crew(req: Request, res: Response, next: NextFunction) {
    return res.json({
      message: 'Hello Crew!'
    });
  }

}

export const crewController = new CrewController();
