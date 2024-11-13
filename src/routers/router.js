const { Router } = require("express");
const userRouter = require("./userRouter");
const dietRouter = require("./dietRouter");
const imageRouter = require("./imageRouter");
const atributtesRouter = require('./attributesRouter')

const router = Router();

router.use('/user', userRouter);
router.use('/diet', dietRouter);
router.use('/image', imageRouter);
router.use('/atributte', atributtesRouter);

module.exports = router;