export class AuthResponse
{

    constructor(
                    public token: string, 
                    public user_type: string, 
                    public user: object, 
                    public role: string, 
                    public resources: [], 
                    public actions: []
                ){}
}