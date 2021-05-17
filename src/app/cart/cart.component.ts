import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService} from '../http.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute, private productservice: ProductService) { }
items = [];
total: number;
  ngOnInit(): void {
    this.items = this.productservice.getCartProducts();
    console.log(this.items);
    console.log(this.total);
  }
  // tslint:disable-next-line:typedef
  onAddQuantity(prod)
  {
    this.productservice.addQuantity(prod);
  }
  // tslint:disable-next-line:typedef
  onRemoveQuantity(prod)
  {
    this.productservice.removeQuantity(prod);
  }
  calculatetotal()
  {
    this.total = this.productservice.calcTotal();
  }
  display()
  {

      this.httpService.saveProducts(this.items).subscribe((items) => {
        console.log(items);
        alert('Order Placed Successfully');

      });



  }
}
