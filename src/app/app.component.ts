import { Component } from '@angular/core';
import { UserService } from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent { 
  userName : string;
  service : UserService;
  
  constructor(private _userService : UserService ){

  }

  signIn() : void{
    this._userService.setUser({
      name : 'Welcome UserX'
    });

    this.userName = this._userService.getUser().name;
    console.log("Injected Name",this.userName);
    
  }


}
