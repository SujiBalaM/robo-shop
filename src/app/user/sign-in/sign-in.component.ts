import { Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'robo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
credentials:IUserCredentials = {email:'',password:''}
  signInError: boolean = false;
constructor(private userService:UserService,private route:Router){}

submitForm() {
  this.signInError = false;
  this.userService.signIn(this.credentials).subscribe({
    next:() => {this.route.navigate(['/catalog'])
    this.userService.userLoggedIn.next(true);
  },
    error:() => this.signInError = true
  })
}
}
