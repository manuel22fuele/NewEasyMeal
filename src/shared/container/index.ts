import {container} from 'tsyringe'

import { UserRepository } from '../../modules/Users/infra/repository/UserRepository'
import { IUserRepository } from '../../modules/Users/infra/repository/IUserRepository'

container.registerSingleton<IUserRepository>('UserRepository',UserRepository)

