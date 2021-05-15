import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;
  constructor(private http:HttpService) { }
//   _getCart():void{
//     this.http.getCartItems
//   }
// _increamentQTY(id,quantity):void{
//   const payload={
//     productId:id,
//     quantity,
//   };
//   this.http.increaseQTY(payload).subscribe(()=>{
//     this._getCart();
//     alert('Cart Emptied');
//   });
// }
  ngOnInit(): void {
    // this._getCart();
  }

}
