import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { START_LOGIN } from 'src/app/state/actions/auth.actions';
import { SetLoadingStatus } from 'src/app/state/actions/spinner.action';
import AppState from 'src/app/state/app.state';
import { isAuthenticated } from 'src/app/state/selector/auth.selector';
import { getResponseMessage, getSpinnerStatus } from 'src/app/state/selector/spinner.selector';
import { getUserInfo } from 'src/app/state/selector/user.selector';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    title: string = 'Rachamhub: Login'
    showLoading: boolean = false
    endLoading: boolean = false

    id: string = ''
    name: string = ''
    type: string = ''
    placeholder: string = ''
    value: string = ""
    buttonColor: string = ''
    buttonText: string = 'Register'
    
    status: string = 'Successful'
    message:string = ''
    colorStatus:string = ''
    show:string = 'false'

    @ViewChild('email') email: ElementRef | undefined
    @ViewChild('password') password: ElementRef | undefined

    @Input() switchStatus:boolean = true
    @Input() switchState: string = 'flex w-20 h-10 m-10 rounded-full transition-all duration-500 bg-red-400 cursor-pointer'
    @Input() switchingState: string = 'h-10 w-10 rounded-full transition-all duration-500 ml-0 bg-red-900 border-10'
    userActions: any[] = []

    constructor(private router: Router, private store: Store<AppState>) { }    

    ngOnInit(): void {  
      this.store.select(getSpinnerStatus).subscribe((data) => {
         this.showLoading = data
      }) 
      this.store.select(getResponseMessage).subscribe((data) => {
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
                  console.log('Am Authenticated')
              } else {
                  console.log('Not Authenticated')
              }
          }
      }) 
    }

    signup = () => 
    {
      const email = this.email?.nativeElement.value
      const password = this.password?.nativeElement.value
      this.store.dispatch(SetLoadingStatus({ loading: true }))
      this.store.dispatch(START_LOGIN({ email, password }))
    }

    authenticate = () => 
    {
      const email = this.email?.nativeElement.value
      const password = this.password?.nativeElement.value
      this.store.dispatch(SetLoadingStatus({ loading: true }))
      this.store.dispatch(START_LOGIN({ email, password }))
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

