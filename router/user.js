const { Router } = require("express");
const UserController = require("../controller/UserController");
const { tryCatch } = require("../error/errorHandler");

const router = Router();

router
  .post("/", tryCatch(UserController.create))
  .get("/:id", tryCatch(UserController.read))
  .patch("/:id", tryCatch(UserController.update))
  .delete("/:id", tryCatch(UserController.delete));

module.exports = router;
