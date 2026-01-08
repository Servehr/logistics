import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, Observable, of } from 'rxjs';
import { START_FORGOT, START_LOGIN } from 'src/app/state/actions/auth.actions';
import { SetErrorMessage, SetLoadingStatus } from 'src/app/state/actions/spinner.action';
import AppState from 'src/app/state/app.state';
import { isAuthenticated } from 'src/app/state/selector/auth.selector';
import { getResponseMessage, getSpinnerStatus } from 'src/app/state/selector/spinner.selector';
import { getUserInfo } from 'src/app/state/selector/user.selector';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

    title: string = 'Rachamhub: Login'
    showLoading: boolean = false
    
    status: string = 'Successful'
    message:string = ''
    colorStatus:string = ''
    value:string = ''

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'
    userActions: any[] = []

    errorMessages = 
    { 
       required: 'Enter Email', 
       email: 'Enter a valid email'
    }
    
    forgetForm: FormGroup;

    constructor(private router: Router, private store: Store<AppState>) 
        { 
           this.forgetForm = new FormGroup(
            {
               email: new FormControl('', [Validators.required, Validators.email])
            }
           )
        }   

    ngOnInit(): void {  
      this.store.select(getSpinnerStatus).subscribe((data) => {
         this.showLoading = data
      }) 
      this.store.select(getResponseMessage).subscribe((data) => {
          if(data.response.statusCode === 400)
          {
              this.alertCode('error')
          } 
          if(data.response.statusCode === 200)
          {
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
                  console.log('Am Authenticated')
              } else {
                  console.log('Not Authenticated')
              }
          }
      console.log("Call Again")
      }) 
    }

    forgot = () => 
    {
      if(this.forgetForm.valid)
      {
        this.store.dispatch(SetLoadingStatus({ loading: true }))
        of(this.forgetForm.value)
        .pipe(delay(1000))
        .subscribe(UserEmail => 
            {
              const email = UserEmail['email']!    
              this.store.dispatch(START_FORGOT({ email }))
            }
          ); 
        } else {
          this.forgetForm.markAllAsTouched();
          this.alertCode('error')
          this.message = "A valid email is required for password reset"
          // this.store.dispatch(SetErrorMessage({ msg: this.message, statusCode: 400, operation: "authenticate-user"  }))
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
            this.colorStatus = 'relative py-2 pl-4 pr-10 leading-normal text-white bg-red-600 rounded-lg mt-10 text-[14px]'
            break;
          case 'success':
            this.colorStatus = 'relative py- pl-4 pr-10 leading-normal text-white bg-green-800 rounded-lg mt-10 text-[14px]'        
            break;
          default:
            this.colorStatus = 'relative py- pl-4 pr-10 leading-normal text-white bg-purple-200 rounded-lg mt-10 text-[14px]'
            break;
        }
        return this.colorStatus
    }

    
}
