import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products = [{id: 1 , name: 'Crushed Sheets',
description:  ' Prempari Handmade sheets for crafting purpose.16 packets per bundle.',
price: 600,
img: '../../assets/images/pr1.jpeg',
quantity: 0,
total: 0},
{id: 2 , name: 'Brown Board',
description:  '  Classic Brown Board - 16gsm,14gsm and 12gsm.10 packets per bundle.',
price: 1000,
img: '../../assets/images/pr2.jpeg',
quantity: 0,
total: 0},
{id: 3 , name: 'Gum-Sheet',
description:  '  Premium Gumsheets -china imported[20 gsm]16pacs per bundle ',
price: 400,
img: '../../assets/images/pr3.jpeg',
quantity: 0,
total: 0},
{id: 4 , name: 'Gift Wrappers',
description:  ' packet contains 20 sheets.customized sheets.16 packets per bundle. ',
price: 200,
img: '../../assets/images/pr4.jpeg',
quantity: 0,
total: 0},
{id: 5 , name: 'Warnish Papers',
description:  '  Each Packet contains 16 colours.Colours can be customized.20 packets per bundle. ',
price: 300,
img: '../../assets/images/pr5.jpeg',
quantity: 0,
total: 0},
{id: 6 , name: 'Butter Papers',
description:  '  Basing for cakes and foods . 4 per bundle ',
price: 700,
img: '../../assets/images/glp.jpeg',
quantity: 0,
total: 0},
{id: 7 , name: 'Tissue Papers',
description:  '  14gsm white,14 gsm unbleached,16 gsm white available.price varies accordingly. ',
price: 500,
img: '../../assets/images/gup.jpeg',
quantity: 0,
total: 0},
{id: 8 , name: 'Black Boards',
description:  'Black Board with different Gsms available.16 packets per bundle',
price: 1500,
img: '../../assets/images/pr6.jpeg',
quantity: 0,
total: 0},
{id: 9 , name: 'Color Boards',
description:  'Small - Sized colour reem Boards for small -scale commercials.20 pacs per bundle.',
price: 200,
img: '../../assets/images/pr8.jpeg',
quantity: 0,
total: 0},
{id: 10 , name: 'Glitter Sheets',
description:  ' Glittery Gumsheets for Stationary and ornamental papers.10 pacs per bundle.',
price: 600,
img: '../../assets/images/gp.jpeg',
quantity: 0,
total: 0}
];


  constructor() { }
  total = 0;
  cartProducts = [];
  addProduct(item) {
    item.quantity=1;
    item.total = item.price;
    this.cartProducts.push(item);
    console.log(this.cartProducts);
  }

  getCartProducts()
  {
    console.log(this.cartProducts);
    return this.cartProducts;
  }
  getproducts() {
    return this.products;
  }

  clearCart() {
    this. cartProducts = [];
  }
  // tslint:disable-next-line:typedef
  addQuantity(prod)
  {

   let i;
   for (i = 0; i < 10; i++)
   {
     if (this.cartProducts[i].id === prod.id)
     {
       this.cartProducts[i].quantity += 1;
       this.cartProducts[i].total += this.cartProducts[i].price;
       console.log(this.cartProducts[i]);
     }
   }

  }
  removeQuantity(prod)
  {
    let i;
    for (i = 0; i < 10; i++)
   {
     if (this.cartProducts[i].id === prod.id)
     {
       this.cartProducts[i].quantity -= 1;
       this.cartProducts[i].total -= this.cartProducts[i].price;
       console.log(this.cartProducts[i]);
     }
   }
  }
  // tslint:disable-next-line:typedef
  calcTotal()
  {
    this.total = 0;
    let i;

    for (i = 0; i < this.cartProducts.length; i++)
    {
      this.total += this.cartProducts[i].total;
    }
    return this.total;
  }
  getTotal()
  {
    return this.total;
  }
}
