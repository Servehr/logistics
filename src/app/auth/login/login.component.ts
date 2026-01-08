import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, of } from 'rxjs';
import { START_LOGIN } from 'src/app/state/actions/auth.actions';
import { SetErrorMessage, SetLoadingStatus } from 'src/app/state/actions/spinner.action';
import AppState from 'src/app/state/app.state';
import { isAuthenticated } from 'src/app/state/selector/auth.selector';
import { getResponseMessage, getSpinnerStatus } from 'src/app/state/selector/spinner.selector';
import { getUserInfo } from 'src/app/state/selector/user.selector';



interface IAuthenticatedUser 
{
  email: string,
  password: string,
}

interface IAccess 
{
   user: IAuthenticatedUser
}

export const PasswordRequiredAndLength = (control: AbstractControl): ValidationErrors | null => {
    return control.value.length >  0 ? 
                                      control.value.length < 8 ? { passwordLength : "Minimum password length is 8" } : null 
                                  :  { passwordRequired : "Enter Password" }
}

export const IsRadioBoxChecked = (control: AbstractControl): ValidationErrors | null => 
{
    return control.value?.length === 0 || control.value === null ? { radioBoxRequired : 'radioBoxRequired' } :  null
}

export const IsCheckBoxChecked = (control: AbstractControl): ValidationErrors | null => 
{
    return control.value?.length === 0 || control.value === null ? { checkBoxRequired : 'checkBoxRequired' } :  null
}

export const IsSelectionMake = (control: AbstractControl): ValidationErrors | null => 
{
    return control.value?.length === 0 || control.value === null ? { selectionRequired : 'selectionRequired' } :  null
}

export const CheckNote = (control: AbstractControl): ValidationErrors | null => 
{
    return control.value?.length === 0 || control.value === null ? { isNoted : 'isNoted' } :  null
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    title: string = 'Rachamhub: Login'
    showLoading: boolean = false
    endLoading: boolean = false
    
    status: string = 'Successful'
    message:string = ''
    colorStatus:string = ''
    show:string = 'false'
    value:string = ''
    disabled!: boolean

    name!: string
    option!: string

    options: { id: string, name: string }[] =  [
      { id: "1", name: 'Nigeria' },
      { id: "2", name: 'Ghana' },
    ]

    rows: number = 5
    cols: number = 10


    credentials: { email: string, password: string } = {
      email: '',
      password: ''
    }

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'
    userActions: any[] = []
    
    errorMessages = 
    { 
       required: 'Enter Email', 
       email: 'Enter a valid email', 
       radioBoxRequired: 'Tick an option', 
       selectionRequired: 'Make selection',
       passwordRequired: 'Enter password' , 
       passwordLength: 'Password must be at least 8 character in length',
       isNoted: 'Leave us a message',
    }

    // formControl: any = new FormControl("", Validators.required)
    loginForm: FormGroup;

    constructor(private router: Router, private store: Store<AppState>) 
    { 
       this.loginForm = new FormGroup(
        {
           email: new FormControl('', [Validators.required, Validators.email]),
           password: new FormControl('', [PasswordRequiredAndLength])
        }
       )
    }   

    ngOnInit(): void {  

      this.store.select(getSpinnerStatus).subscribe((data) => 
      {
         this.showLoading = data
      }) 
      this.store.select(getResponseMessage).subscribe((data) => 
      {
          if(data.response.statusCode === 400)
          {
              this.alertCode('error')
          } else {
              this.alertCode('success')
          }
          this.message = data.response.msg
      }) 
      this.store.select(isAuthenticated).subscribe((data) => 
      {
          if(data != null)
          {
              data?.auth?.actions?.forEach((lp: any, index: number) => {
                this.userActions.push(lp)
              })
              if(data?.auth?.token)
              {
                  // console.log('Am Authenticated')
              } else {
                  // console.log('Not Authenticated')
              }
          }
      }) 
    }

    authenticate = async () => 
    {
       await delay(5000)
       this.store.dispatch(SetLoadingStatus({ loading: true }))
       let em = this.loginForm.value['email']
       let pswd = this.loginForm.value['password']
       if(this.loginForm.valid)
       {
          
          if(em === 'admin@company.com' && pswd === 'password')
          {
              this.router.navigate(['/overview'])
          }
          this.store.dispatch(SetLoadingStatus({ loading: false }))
          //  const email = UserDetail['email']!
          //  const password = UserDetail['password']! 

          // this.store.dispatch(SetLoadingStatus({ loading: true }))
          // of(this.loginForm.value)
          // .pipe(delay(1000))
          // .subscribe(UserDetail => 
          //     {
          //       const email = UserDetail['email']!
          //       const password = UserDetail['password']!      
          //       this.store.dispatch(START_LOGIN({ email, password }))
          //     }
          //   )
       } else {
          this.loginForm.markAllAsTouched();
          this.store.dispatch(SetLoadingStatus({ loading: false }))
          this.message = "Attend to all fields"
          this.store.dispatch(SetErrorMessage({ msg: this.message, statusCode: 400, operation: "authenticate-user"  }))
       }     
    }

    changeStatus = (event: any) => 
    {
       this.switchStatus = event.switchStatus
       this.switchState = event.switchState
       this.switchingState = event.switchingState
    }

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

    
}
