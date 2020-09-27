import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'angular-test';
  menuItems = [];
  constructor(private http: HttpClient) { 
    this.http = http;
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.http.get<any>('http://208.109.13.111:9090/api/Category', {observe: 'body', responseType: 'json'}).subscribe(data => {
      console.log(data);
    });
  }
}
