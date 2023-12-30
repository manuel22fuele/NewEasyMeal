import { RegisterUserUseCases } from "./registerUserUseCases"
import { UserRepository } from "../../infra/repository/UserRepository";
import { IUserRepository } from "../../infra/repository/IUserRepository";
import { IUserDTO } from "../../infra/entities/User";

const RegisterUserUseCaseMock = RegisterUserUseCases as jest.Mock<RegisterUserUseCases>

describe('Register User Use Case', () => {
let sut:RegisterUserUseCases;

const data : IUserDTO = {
    name:'Doana Mado',
    email:'mado@gmail.com',
    password:'1234',
    phone:'031728499'
};

const mockUserRepository:IUserRepository = {
    register:jest.fn().mockResolvedValueOnce({})
}

beforeEach(()=>{
    sut = new RegisterUserUseCaseMock(mockUserRepository);
})
test('should be able to create a new register user', async ()=>{
    const userRepository = new UserRepository();
    const usecase = new RegisterUserUseCases(userRepository);
   
    const response = await sut.execute(data);

    expect(response).toBe(undefined)
}) 
})