import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddingUser, AllUser, AllUserByType, SearchUser, SingleUser, UpdateUser } from 'src/app/state/actions/user.actions';
import { getUsers, getUserInfo, getValueToUpdate } from 'src/app/state/selector/user.selector';
import AppState from 'src/app/state/app.state';
import { User } from 'src/app/state/model/user.model';
import { SetLoadingStatus } from 'src/app/state/actions/spinner.action';
import { getAddedUserResponse, getResponseMessage, getSpinnerStatus } from 'src/app/state/selector/spinner.selector';
import { Observable, delay, map } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { getPageLinks } from 'src/app/state/selector/paginate.selector';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css']
})
export class StaffsComponent implements OnInit { 

    title: string = 'Staffs'
    message:string = ''
    colorStatus:string = ''
    show:string = 'false'
    ActionName: string = 'staffs'
    
    ModalState: string = ''


    @Input() fieldType: string = 'text'
    @Input() fieldName: string = 'search-merchant'
    @Input() fieldId: string = 'search-merchant'
    @Input() fieldPlaceHolder: string = 'Enter keyword to search ...'


    @Input() labelName: string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'

    @Input() Action: boolean = true
    @Input() ViewAction: boolean = false

       
    maritalStatus:any[] = [
      { key: '-1', value:'- Select Marital Status -' },
      { key: 'single', value:'Single' },
      { key: 'married', value:'Married' },
      { key: 'divorced', value:'Divorced' }
    ]

    sex:any[] = [
      { key: '-1', value:'- Select Gender -' },
      { key: 'male', value:'Male' },
      { key: 'female', value:'Female' }
    ]

    // later modified
    /* @ignore */
    countries:any[] = [
      { key: '-1', value:'- Select Country -' },
      { key: '1', value:'Nigeria' },
      { key: '2', value:'Iran' },
      { key: '3', value:'Russia' }
    ]
    /* @ignore */
    capitals:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: '1', value:'Abuja' },
      { key: '2', value:'Kuwait' },
      { key: '3', value:'Moscow' }
    ]
    /* @ignore */
    departments:any[] = [
      { key: '-1', value:'- Select State -' },
      { key: '1', value:'Rider' },
      { key: '2', value:'CSA' },
      { key: '3', value:'Manager' }
    ]    
    /* @ignore */
    userTypes:any[] = [
      { key: '-1', value:'- Select User Type -' },
      { key: '1', value:'Merchant' },
      { key: '2', value:'CSA' },
      { key: '3', value:'Rider' },
      { key: '4', value:'Manager' }
    ]
    // later modified ends

    @Input() pageNumbers = [
      { key: '20', value:'20' },
      { key: '30', value:'30' },
      { key: '50', value:'50' },
      { key: '75', value:'75' },
      { key: '100', value:'100' },
      { key: '150', value:'150' },
      { key: '200', value:'200' },
      { key: '500', value:'500' }
    ]

    @Input() Header: any[] = [
      {
        "merchant": [        
            { Header: 'Firstname', Column: 'firstname', show: true }, 
            { Header: 'Surname', Column: 'surname', show: true  }, 
            { Header: 'Phone Number', Column: 'phone_number', show: true  }, 
            { Header: 'Email', Column: 'email', show: true  },
            { Header: 'Employee ID', Column: 'identification_no', show: true  }, 
            { Header: 'Actions', Column: '', show: true  }
        ]
      }
    ]
    /* @ignore */
    @Input() RowAndColumn: Observable<User[]> | undefined | any

    Users: User[] = []
    showLoading:boolean = false

    @Input() buttonText:string = 'Search'
    @Input() buttonColor:string = 'bg-CompanyBlue'
    
    responseStatus: string = ''
    userAddedResponse: string = ''
    hidden: boolean = true
    userToUpdate: boolean = false
    modalTitle: string = "Add User"
    position: number = -1
    loader: boolean = false

    addingStaff:boolean = true
    updatingStaff: boolean = false

    // firstName: string = ""
    // surName: string = ""
    // phoneNumber: string = ""
    // email: string = ""
    // dob: Date = new Date("yyyy-mm-dd")
    // gender: string = ""
    // address: string = ""
    // marital_status: string = ""
    // user_type_id: number = -1
    // department_id: number = -1
    // country_id: number = -1
    // capital_id: number = -1

    theUser!: Observable<User[]>

    beforeCurrent: number = 3
    afterCurrent: number = 3
    currentPage: number = 1
    hasNextPage: boolean = true
    hasPreviousPage:boolean = true
    perPage: number = 4
    totalPage: number = 8
    fromPage: string = "users"
    noOfPages: number = 3
    
    constructor(private store: Store<AppState>)
    {
        this.store.dispatch(AllUser({ currentPage: this.currentPage, perPage: this.perPage, allPages: 0 }))         
    }

    ngOnInit(): void 
    {
        this.message = ''
        this.loader = false
        this.store.select(getUserInfo).subscribe(async (data) => 
        {await delay(5000)
            this.getUsers()
        })
        this.store.select(getResponseMessage).subscribe((data) => 
        {
            if(data.response.statusCode === 400)
            {
                setTimeout(() => {
                  this.alertCode('error')
                  this.hidden = false
                  this.responseStatus = data.response.statusCode.toString()
                  this.message = data.response.msg
                  this.showLoading = true
                }, 3000)
            } else if(data.response.statusCode === 200) { 
                this.alertCode('success')
                this.message = data.response.msg
                this.showLoading = false
                // this.cancel()
                this.responseStatus = '0'
                if(data.response.operation === "update-user")
                {
                    this.message = `User successfully updated`
                } 
                if(data.response.operation === "add-user")
                {
                    this.message = `User successfully onboarded`
                } 
                this.getUsers()
                setTimeout(() => {
                    this.responseStatus = '0'
                    this.message = ``
                }, 3000)
            } else {
               this.responseStatus = '400'
            }
        })          
        this.store.select(getSpinnerStatus).subscribe((data) => 
        {
           this.showLoading = data
        })                 
        // this.store.select(getValueToUpdate).subscribe((data: any) => 
        // {
        //     this.modalTitle = '' 
        //     if(data.status === false)
        //     {
        //       this.modalTitle = 'Add Staff' 
        //     } else {             
        //       this.modalTitle = `Change User: About modifing (${data.user.firstname} ${data.user.surname})`
        //       this.userToUpdate = data.status
        //       this.User = data.user
        //       this.position = data.position
        //       this.addingStaff = false
        //       this.updatingStaff = true
        //       this.populateField(data.user)
        //     }
        // })
    }

    getUsers = () => 
    {      
        this.store.select(getUsers).subscribe((data: any) => 
        {
            this.store.dispatch(SetLoadingStatus({ loading: true }))
            this.RowAndColumn = data?.users
            if(this.RowAndColumn?.length > 0)
            {
                this.loader = true
            }
        })
    }

    /* @ignore */
    displaySuggestion = (keyword: string) => 
    {  
        this.store.dispatch(SetLoadingStatus({ loading: false }))
        this.store.dispatch(SearchUser({keyword: keyword }))
    }
    
    // takeFirstName(data: any){ this.firstName = data }
    // takeSurname(data: any){ this.surName = data }
    // takePhoneNumber(data: any){ this.phoneNumber = data  }
    // takeEmail(data: any){ this.email = data }
    // takeDate(data: any){ this.dob = data }
    // takeGender(data: any){ this.gender = data }
    // takeMessage(data: any){ this.address = data }
    // changeMaritalStatus(data: any){ this.marital_status = data }
    // changeUserType(data: any){ this.user_type_id = parseInt(data)  }
    // changeDepartment(data: any){ this.department_id = parseInt(data)  }
    // changeCountry(data: any){ this.country_id = parseInt(data)  }
    // changeState(data: any){ this.capital_id = parseInt(data)  }


    // addStaff = () => 
    // {
    //     if(this.userToUpdate === false)
    //     {
    //         this.create()
    //     } else {
    //         this.update()
    //     }
    // }    

    // update = () =>  
    // {      
    //     this.responseStatus = '0'
    //     const staff: User = 
    //     {  
    //         id: this.User.id,
    //         firstname: this.firstName != '' ? this.firstName : this.User.firstname,
    //         surname: this.surName != '' ? this.surName : this.User.surname,
    //         phone_number: this.phoneNumber != '' ? this.phoneNumber : this.User.phone_number,
    //         email: this.email != '' ? this.email : this.User.email,
    //         department_id: this.department_id != -1 ? this.department_id : this.User.department_id.id,
    //         user_type_id: this.user_type_id != -1 ? this.user_type_id : this.User.user_type_id.id,
    //         dob: this.dob != new Date() ? this.dob : this.User.dob,
    //         gender: this.gender != '' ? this.gender : this.User.gender,
    //         marital_status: this.marital_status != '' ? this.marital_status : this.User.marital_status,
    //         country_id: this.country_id != -1 ? this.country_id : this.User.country_id.id,
    //         capital_id: this.capital_id != -1 ? this.capital_id : this.User.capital_id.id,
    //         address: this.address != '' ? this.address : this.User.address
    //     }
    //     this.store.dispatch(SetLoadingStatus({ loading: false }))
    //     setTimeout(() => {
    //       this.store.dispatch(UpdateUser({ user: staff }))
    //     }, 3000)
    // }

    

    // populateField = (data: any) => 
    // {
    //     this.firstName = data.firstname
    //     this.surName = data.surname
    //     this.phoneNumber = data.phone_number
    //     this.email = data.email
    //     this.dob = data.dob
    //     this.gender = data.gender
    //     this.address = data.address
    //     this.marital_status = data.marital_status
    //     this.user_type_id = data.user_type_id.id
    //     this.department_id = data.department_id.id
    //     this.country_id = data.country_id.id
    //     this.capital_id = data.capital_id.id
    // }

    alertCode = (color: string) => 
    {
        switch (color) {
          case 'error':            
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-red-600 rounded-lg mt-10'
            break;
          case 'success':
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-green-800 rounded-lg mt-10'        
            break;
          default:
            this.colorStatus = 'relative py-3 pl-4 pr-10 leading-normal text-white bg-purple-200 rounded-lg mt-10'
            break;
        }
        return this.colorStatus
    }


    changeStatus = (event: any) => 
    {
      this.switchStatus = event.switchStatus
      this.switchState = event.switchState
      this.switchingState = event.switchingState
    }

    CloseCurrentModal(event: any)
    {
       this.ModalState = event
    }



}

