import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }



  login(){

    if (this.email == 'admin' &&  this.password == 'admin') {
      this.router.navigate(["user"]);
      this.toastr.success('loggedin sucessfully');
    }else {
      this.toastr.warning('login failure');
    }

  }

}
