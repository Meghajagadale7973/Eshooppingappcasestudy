import { Component, OnInit } from '@angular/core';
import { Product } from'../models/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
 import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public products : any;
searchKey:string = " ";
// selectedProduct: any; // Variable to store the selected product for details view
// showProductDetails: boolean = false;
  constructor(private _productservice: ProductService,private CartService : CartService,private _router:Router) { }

  // products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => {this.products = res;

    this.products.forEach((a :any) =>{
    Object.assign(a,{quantity:1});
  });
});

this.CartService.search.subscribe((val:any)=>{
  this.searchKey = val;
})
  }

  addtocart(product : any){
    this.CartService.addtoCart(product);

  }
  // showDetails(product: any) {
  //    this.selectedProduct = product;
  //   this.showProductDetails = true; // Show product details when this function is called
  //  }   // Function to hide the product details
  //   hideDetails() {

  //     this.showProductDetails = false;

}

