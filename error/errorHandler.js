const APIError = require("./APIError");

const tryCatch = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};

function errorHandler(err, req, res, next) {
  if (err instanceof APIError) {
    return res.status(err.code).json(err.message);
  }
  return res.status(500).json(APIError.internal("Something went wrong"));
}

module.exports = { errorHandler, tryCatch };
