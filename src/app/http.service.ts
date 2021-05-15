import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {

  private apiUserUrl:string;

  constructor(private http: HttpClient) {
    this.apiUserUrl = 'https://tamilnad-papers-9d18c-default-rtdb.firebaseio.com//users.json';
  }

  saveUsers(data:any) {
    return this.http.post<any>(this.apiUserUrl,data);
  }

  getUsers() {
    return this.http.get<any>(this.apiUserUrl);
  }

  // getAllProducts() {
  //   return this.http.get(`${environment.baseURL}/product`);
  // }
  // addToCart(payload) {
  //   return this.http.post(`${environment.baseURL}/cart`, payload);
  // }
  // getCartItems() {
  //   return this.http.get(`${environment.baseURL}/cart`);
  // }
  // increaseQTY(payload) {
  //   return this.http.post(`${environment.baseURL}/cart`, payload);
  // }
  // emptyCart() {
  //   return this.http.delete(`${environment.baseURL}/cart/empty-cart`);
  // }
}
