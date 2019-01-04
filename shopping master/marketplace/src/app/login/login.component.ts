import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @Output() loginFlag = new EventEmitter<Boolean>();

  users =[{ "id":1,
            "name":{"firstName":"Atul",
                    "lastName":"Patel"},
            "username":"atul@gmail.com",
            "password":"12345"},
          {"id":2,
          "name":{"firstName":"Kunal",
                  "lastName":"Kumar"},
            "username":"kunal@gmail.com",
            "password":"12345"},
          {"id":3,
          "name":{"firstName":"Abhijit",
                  "lastName":"Kumar"},
            "username":"abhijit@gmail.com",
            "password":"12345"}
      ];

loginForm: FormGroup;
loading = false;
submitted = false;
returnUrl: string;

constructor(
    private formBuilder: FormBuilder,
    ) {}

ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });


    // get return url from route parameters or default to '/'
    
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }



  onSubmit() {

    this.submitted = true;

    // // stop here if form is invalid
    // if (this.loginForm.invalid) {
    //     return;
    // }

    this.users.forEach(user =>{
      if((user.username==this.f.username.value) &&(user.password ==this.f.password.value)){
        //alert("login success");
        this.loginFlag.emit(true);
        localStorage.setItem("currentUser", JSON.stringify(user))
        
      }
      // else{
      //   this.loginFlag.emit(false);
      // }
    })
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getLogUser() {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return 

  }

}
