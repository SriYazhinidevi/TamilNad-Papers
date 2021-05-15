import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  status1 = false;
  status2 = false;
  status3 = false;
  msg1 = '';
  msg2 = '';
  msg3 = '';

  constructor(private router: Router, private httpService:HttpService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any) {
    if(data.email === '' || data.email === null) {
      alert("Email is Mandatory");
    }
    
    if(data.password === '' || data.password === null) {
      alert("password and confirm password is mandatory");
    }
    else {
      if(data.password === data.confirmpassword) {
        this.httpService.saveUsers(data).subscribe((data)=> {
          console.log(data);
          alert("User Registered Successfully");
        });
      }
      else {
        alert("Password and Confirm Password Mismatch");
      }
    }
    
  }

  onChange1(event) {
    this.status1 = false;
  }

  onChange2(event) {
    this.status2 = false;
  }

  onChange3(event) {
    this.status3 = false;
  }

  goLogin() {
    this.router.navigate(['/']);
  }

}
