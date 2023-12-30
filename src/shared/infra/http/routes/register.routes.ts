import { Router } from "express";
import { celebrate } from "celebrate";
import { registerValidatorv } from "../../../../modules/Users/useCases/registerUser/validator";
import {RegisterUserController}  from "../../../../modules/Users/useCases/registerUser/registerUserController";
const registerRoutes = Router();

const registerUserController = new RegisterUserController();

registerRoutes.post('/',celebrate(registerValidatorv), registerUserController.handle);

export {registerRoutes}