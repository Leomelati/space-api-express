export class ApiError extends Error {
  statusCode?: number;

  constructor(errorMessages: string, status: number) {
    super(errorMessages);
    this.statusCode = status;
  }
}
