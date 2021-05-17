import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private apiUserUrl:string;
  private apiUserUrl1:string;

  constructor(private http: HttpClient) {
    this.apiUserUrl = 'https://tamilnad-papers-9d18c-default-rtdb.firebaseio.com//users.json';
    this.apiUserUrl1 = 'https://tamilnad-papers-9d18c-default-rtdb.firebaseio.com//product.json';
  }

  saveUsers(data:any) {
    return this.http.post<any>(this.apiUserUrl,data);
  }

  getUsers() {
    return this.http.get<any>(this.apiUserUrl);
  }
  saveProducts(data: any) {
    return this.http.post<any>(this.apiUserUrl1, data);
  }

}
