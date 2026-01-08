export interface User
{
    
    id?: number
    firstname?: string
    surname?: string
    phone_number?: string
    alternate_phone_number?: string
    email?: string
    department_id?: any
    user_type?: number
    dob?: Date
    gender?: string
    marital_status?: string
    country_id?: any
    capital_id?: any
    address?: string
    employee_id?: string
    user_type_id?: any
    status?: string
    online?: boolean
    onboardedBy?: string
    image?: string

    // id?: number
    // firstname?: string
    // surname?: string
    // phone_number?: string
    // alternate_phone_number?: string
    // email?: string
    // department_id?: {
    //     id: number,
    //     mame?: string
    // },
    // user_type?: number
    // dob?: Date
    // gender?: string
    // marital_status?: string
    // country_id?: {
    //     id: number,
    //     mame?: string
    // },
    // capital_id?: {
    //     id: number,
    //     mame?: string
    // },
    // address?: string
    // employee_id?: string
    // user_type_id?: number
    // status?: string
    // online?: boolean
    // onboardedBy?: string
    // image?: string


    // constructor(
    //     public id?: number, 
    //     public firstname?: string, 
    //     public surname?: string,
    //     public phoneNumber?: string, 
    //     public alternatePhoneNumber?: string, 
    //     public email?: string, 
    //     public employeeId?: string, 
    //     public department?: string, 
    //     public userType?: string, 
    //     public dob?: string, 
    //     public gender?: string, 
    //     public maritalStatus?: string, 
    //     public country?: string, 
    //     public capital?: string, 
    //     public address?: string, 
    //     public imagePath?: string
    // ){} 
    
    // constructor(private id: number, private firstname: string, private surname: string, private phoneNumber: string, private alternatePhoneNumber?: string, private email: string, private employeeId?: string, private department: string, private userType: string, private dob: string, private gender: string, private maritalStatus: string, private country: string, private capital: string, private address: string, private imagePath?: string){}
    
}

interface department {
    id: number,
    name: string
}

interface country {
    id: number,
    name: string
}

interface capital {
    id: number,
    name: string
}

interface userType {
    id: number,
    name: string
}