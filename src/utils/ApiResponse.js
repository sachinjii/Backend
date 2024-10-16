class ApiResponse {
  constructor(statusCode, message = "Success", response) {
    this.statusCode = statusCode;
    this.response = response;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
