import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flipkart';
  constructor(private http:HttpClient){
    console.log("hee");
    
    this.http.get("http://localhost:4000/api/user").subscribe(res => console.log("===========",res));
  }
}
