import { Component, OnInit } from '@angular/core';

import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMessage:string|undefined;
  constructor(private product:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  submit(data:product){
    // console.log(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.addProductMessage="product is successfully Added"
      }
      setTimeout(()=>{
        this.addProductMessage=undefined;
        this.router.navigate(['seller-home'])
      },1000)

      // Or we can write this also It gets shorter! If the function has only one statement,
      // setTimeout(()=>
      //   this.addProductMessage=undefined
      // ,3000)
    })
  }

}
