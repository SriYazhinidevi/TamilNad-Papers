import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
items = this.productservice.getproducts();
  constructor(private route: ActivatedRoute, private productservice:ProductService) { }

  ngOnInit(): void {
    console.log(this.productservice.getproducts());

  }
addProduct(item){
  this.productservice.addProduct(item);
}


}
