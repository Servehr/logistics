import { User } from "../../model/user.model";

export interface IUserToUpdateState
{    
    user: {
        position: number
        status: boolean
        userToUpdate: User
    }
}