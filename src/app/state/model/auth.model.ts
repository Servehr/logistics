export interface Auth 
{    
    auth: {    
        actions: [] | [{}] | null
        resources: [] | null
        role: string
        token: string
        user: object
        user_type: string
    }
}

// export interface Auth 
// {
//     token: number,
//     user_type: string,
//     user: {
//         id: 2,
//         firstname: string,
//         surname: string,
//         phone_number: string,
//         email: string
//     },
//     role: string,
//     resources: [],
//     actions: []
// }