import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';
import {FormGroup, FormControl}from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  sellerSignUp= new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  })
  sellerLogin= new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  showLogin=true;
  authError:string="";
  constructor(private seller:SellerService, private route : ActivatedRoute, private router:Router) { }


  ngOnInit(): void {
    this.seller.reloadSeller()
  }
  signUp(data:SignUp):void{
    // console.log(data)
    //  this.seller.userSignUp(data).subscribe((result)=>{
    //   // console.log(result)
    //   if(result){
    //     this.router.navigate(['seller-home'])
    //   }
    // }); 

    console.log(data)
    this.seller.userSignUp(data)
    
  }
  login(data:SignUp):void{
    this.authError="";
    console.log(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct"
      }
    })
  }
  openLogin(){ 
   this.showLogin=true

  }
  openSignUp(){
    this.showLogin=false
  }
}
