export interface IAuthResponse
{
    data: {
        token: string,
        user_type: string,
        user: {
            id: number,
            firstname: string,
            surname: string,
            phone_number: string,
            email: string
        },
        role: string,
        resources: [],
        actions: []
    },
    message: string
    plus: [] | string | object
    status: number
    success: boolean
}