class APIError {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new APIError(400, msg);
  }

  static notFound(msg) {
    return new APIError(404, msg);
  }

  static internal(msg) {
    return new APIError(500, msg);
  }
}

module.exports = APIError;
