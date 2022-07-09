import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiResponseState } from "../../domain/models/api-response-state.model";
import { ApiResponse } from "../../domain/models/api-response.model";
import { Technology } from "../../domain/models/technology.model";

class TechnologyController{

  public createTech(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const tech: Technology = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Technology Created!", tech));
  }

  public updateTech(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const tech: Technology = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Technology Updated!", tech));
  }

}

export const technologyController = new TechnologyController();