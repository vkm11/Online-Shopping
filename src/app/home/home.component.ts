import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import 'animate.css'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProduts: undefined | product[];
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.popularProduts().subscribe((result)=>{
      console.log(result);
      if(result){ 
        this.popularProduts=result;
      }
    })
  }

}
