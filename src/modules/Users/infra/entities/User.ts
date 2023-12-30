import { v4 as uuid} from 'uuid'

export interface IUserDTO {
    name: string
    email: string
    password: string
    phone: string
}


class User {
    id?:string
    name!:string
    password!:string
    email!:string
    phone!:string
    created_at!:Date
    updated_at!:Date
    
    constructor(){
    
        if(!this.id){
      this.id = uuid();
        }
    }
}

export {User}
