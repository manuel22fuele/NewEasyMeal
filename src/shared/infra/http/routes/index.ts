import { Router } from "express";
import { registerRoutes } from "./register.routes";

const router = Router();

router.use('/users',registerRoutes);

export {router}