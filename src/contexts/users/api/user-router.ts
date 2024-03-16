import express from "express";

import { userController } from "./dependencies";

const userRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
userRouter.get("/", userController.run.bind(userController));
export { userRouter };
