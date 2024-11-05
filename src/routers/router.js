const { Router } = require("express");
const userRouter = require("./userRouter");
const dietRouter = require("./dietRouter");

const router = Router();

router.use('/user', userRouter);
router.use('/diet', dietRouter);

module.exports = router;