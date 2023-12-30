import { container } from "tsyringe";
import { IUserDTO } from "../../infra/entities/User";
import { UserRepository } from "../../infra/repository/UserRepository";
import { RegisterUserUseCases } from "./registerUserUseCases"
import express from 'express'


class RegisterUserController{

    constructor(){}

    async handle(req: express.Request,res: express.Response,next:express.NextFunction):Promise<express.Response>{

        const { email, name, password, phone }: IUserDTO = req.body;

        const registerUseCase = container.resolve(RegisterUserUseCases)

        await registerUseCase.execute({
            email,
            name,
            password,
            phone
        })

        return res.status(201).json({message:'Registo criado com sucesso'})
    }
}

export {RegisterUserController}