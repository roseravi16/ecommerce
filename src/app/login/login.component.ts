import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    console.log("login-=-=-=-")
    var a = [{name:"aru",clas:"asd"},{name:"ravi",class:"assd"}]
    a.forEach(function(item){
      console.log(item)
    })
  }

  ngOnInit() {
  }

}
