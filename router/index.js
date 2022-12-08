const { Router } = require("express");
const { tryCatch } = require("../error/errorHandler");
const userRouter = require("./user");

const router = Router();

router.use("/user", tryCatch(userRouter));

module.exports = router;
