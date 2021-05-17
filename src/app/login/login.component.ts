import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status1 = false;
  status2 = false;
  Username = '';
  Password = '';
  msg1 = '';
  msg2 = '';

  flag : boolean = false;

  allUsers : any;

  constructor(private router: Router, private httpService : HttpService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  onSubmit() {

    if(this.Username === '') {
      this.status1 = true;
      this.msg1 = "Enter Username";
    }
    if(this.Password === '') {
      this.status2 = true;
      this.msg2 = "Enter Password";
    }
    else {
      var i;
      for(i=0;i<this.allUsers.length;i++) {
        if(this.Username===this.allUsers[i].email) {
          if(this.Password === this.allUsers[i].password) {
            this.flag = true;
            this.router.navigate(['/home']);
          }
        }
      }
      if(this.flag === false) {
        alert("Invalid Credentials");
      }
    }

  }

  onChange1(event) {
    this.status1 = false;
  }

  onChange2(event) {
    this.status2 = false;
  }

  getAllUsers() {
    this.httpService.getUsers().subscribe((data)=> {
      this.allUsers = Object.values(data)
      console.log(this.allUsers);
    });
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }
  goHome()
  {
    this.router.navigate(['/']);
  }

}
