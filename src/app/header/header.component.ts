import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  menuType: string="default"
  sellerName: string="";
  searchResult: undefined|product[];
  searchProducts: undefined|product[];
  constructor(private route: Router, private product:ProductService) { }


  ngOnInit(): void {
   
    this.route.events.subscribe((val:any)=>{
      // console.log(val.url)
      if(val.url){
        if(localStorage.getItem('seller')&& val.url.includes('seller')){
          console.log("In seller area");
          this.menuType="seller";
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem("seller");
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }

        }else{
          console.log("Outside Seller");
          this.menuType="default"
        }
      }
    })
  }
  logout(){
    localStorage.removeItem("seller");
    this.route.navigate(['/']);
  }
  searchProduct(query:KeyboardEvent){
    if(query){
      // const element=query.target as HTMLTextAreaElement;
      const element=query.target as HTMLInputElement;
      // console.log(element.value)
      this.product.searchProducts(element.value).subscribe((result)=>{
        console.log(result)
        if(result.length>5){
          result.length=5;
        }
        
        this.searchResult=result;
      })
    }
  }
  hideSearch(){
    this.searchResult=undefined;
  }
  
}
