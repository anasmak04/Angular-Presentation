import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
    listUsers:any;
  constructor(private httpclient : HttpClient) { 
    this.listUsers=[];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.httpclient.get("https://jsonplaceholder.typicode.com/users").subscribe((result) => {
      this.listUsers=result;
    })
  }

}
