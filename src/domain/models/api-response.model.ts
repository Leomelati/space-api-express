import { ApiResponseState } from "./api-response-state.model";

export class ApiResponse {
  State: ApiResponseState;
  Message: string;
  Data: any;
  Erros: any;

  constructor(state, message, data) {
    this.State = state
    this.Message = message

    if (state == ApiResponseState.Sucess)
      this.Data = data
    else
      this.Erros = data
  }
}