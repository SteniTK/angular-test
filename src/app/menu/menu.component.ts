import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems = [];
  constructor(private http: HttpClient) { 
    this.http = http;
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    // http://208.109.13.111:9090/api/Category
    this.http.get<any>('http://localhost:4200/assets/response-stub.json', {observe: 'body', responseType: 'json'}).subscribe(data => {
      this.menuItems = data.result;
      console.log(this.menuItems);
    });
  }

}
