import { IUserToUpdateState } from "./state/IUserToUpdateState";

export const InitialState: IUserToUpdateState = 
{
    user: {
        position: -1,
        status: false,
        userToUpdate: {
            id: 0
        }
    }
}