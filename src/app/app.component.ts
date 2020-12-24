import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Product} from './common/product';
import {PRODUCTS} from './common/productlist';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProductComponent} from "./product/product.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    public dialog: MatDialog,

  ) { }

  error: any;
  title: string = 'E-COMMERCE WEB APP';
  globStock: number;
  totalPrice: number;

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  detail(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.height = "589px"
    dialogConfig.width = "383px"
    dialogConfig.data = PRODUCTS;
    const dialogRef = this.dialog.open(ProductComponent, dialogConfig);
  }

  private products: Product[];


  // tslint:disable-next-line:typedef
  add(price){
    this.totalPrice = this.totalPrice + price;
    this.globStock ++;
  }

  remove(price){
    if (this.globStock <= 0){
      this.globStock = 0;
    } else {
      this.globStock--;
    }

    if (this.totalPrice <= 0){
      this.totalPrice = 0;
    } else {
      this.totalPrice = this.totalPrice - price;
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.products = PRODUCTS;
    this.globStock = 0;
    this.totalPrice = 0;
  }



}
