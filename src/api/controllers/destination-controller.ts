import { json, NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ApiResponseState } from "../../domain/models/api-response-state.model";
import { ApiResponse } from "../../domain/models/api-response.model";
import { Destination } from "../../domain/models/destination.model";

class DestinationController{

  public createDestination(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const destination: Destination = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Destination Created!", destination));
  }

  public updateDestination(req:Request, res:Response, next: NextFunction) {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json(new ApiResponse(ApiResponseState.Failed, "Check passed parameters", errors.mapped()));

    const destination: Destination = req.body;

    return res.json(new ApiResponse(ApiResponseState.Sucess, "Destination Updated!", destination));
  }

}

export const destinationController = new DestinationController();