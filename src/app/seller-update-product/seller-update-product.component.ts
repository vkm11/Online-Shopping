import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl} from '@angular/forms';  // it is required for Reactive Form


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;
  addProduct= new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    color: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
  })
  constructor(private route : ActivatedRoute, private product: ProductService, private router:Router) { }

  ngOnInit(): void {
    let productId= this.route.snapshot.paramMap.get('id')
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.log(data);
      this.productData=data;
    })
  }
  submit(data:product ){
    console.log(data);
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product has updated"
      }
    })
    setTimeout(()=>{
      this.productMessage = undefined;
      this.router.navigate(['seller-home'])
    },1000);
    
  }
}
