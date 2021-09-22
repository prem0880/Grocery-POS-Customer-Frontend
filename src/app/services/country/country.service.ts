import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http : HttpClient) { }

  create(country : Country) {
  
    return this.http.post("https://admin-pos.herokuapp.com/api/country/save", country, {responseType: 'text'} );
  }
  
  get() : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Country>("https://admin-pos.herokuapp.com/api/countries");
  }
}
export class Country {
  id?:number;
  name?:string;
}