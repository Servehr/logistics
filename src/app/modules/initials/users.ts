import { User } from "src/app/state/model/user.model"

export interface TheUser
{    
    id: 0,
    firstname: '',
    surname: '',
    phone_number: '',
    alternate_phone_number: '',
    email: '',
    department_id: {
    id: 0,
    name: ""
    },
    user_type: -1,
    dob: undefined,
    gender: '',
    marital_status: '',
    country_id: {
        id: 0,
        name: ""
    },
    capital_id: {
        id: 0,
        name: ""
    },
    address: '',
    employee_id: '',
    user_type_id: -1,
    status: '',
    onboardedBy: '',
    image: ''
}