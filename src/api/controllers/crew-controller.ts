import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiResponseState } from "../../domain/models/api-response-state.model";
import { ApiResponse } from "../../domain/models/api-response.model";
import { Crew } from "../../domain/models/crew.model";

class CrewController{

  public createCrew(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const crew: Crew = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Crew Created!", crew));
  }

  public updateCrew(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const crew: Crew = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Crew Updated!", crew));
  }

}

export const crewController = new CrewController();
