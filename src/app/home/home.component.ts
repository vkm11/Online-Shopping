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

  videoIcon:string = "../../assets/play.png";
  // videoIcon:string = "<mat-icon>play_circle_outline</mat-icon>";
  
  play:string = "Play";
  videodisabled:boolean = true;


  changeImg(){
    if(this.play == "Play")
    {
      
      this.play = "Pause",
      this.videoIcon = "../../assets/pause.png",
      // this.videoIcon = "<mat-icon>pause_circle_outline</mat-icon>",
      
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "../../assets/play.png",
      // this.videoIcon = "<mat-icon>play_circle_outline</mat-icon>",
      this.play = "Play",
      this.videodisabled = true
    }
  }


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
