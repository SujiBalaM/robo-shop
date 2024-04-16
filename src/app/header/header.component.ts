import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'robo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
user:IUser | null = null;
showSignOutMenu:boolean = false
userLogged:any;
constructor(private userService:UserService,private route:Router){}
ngOnInit() {
this.userService.getUser().subscribe({
  next:(user) => this.user = user
})
this.userService.userLoggedIn.subscribe({
  next:(response) => this.userLogged = response 
})
}
toggleSignOutMenu() {
  this.showSignOutMenu = !this.showSignOutMenu;
}
signOut() {
  this.userService.signOut();
  this.showSignOutMenu = false;
  this.route.navigate(['/sign-in']);
  this.userService.userLoggedIn.next(false);

}

}
