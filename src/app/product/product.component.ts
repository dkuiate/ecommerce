import { Component, OnInit } from '@angular/core';
import {Product} from '../common/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  private products: Product[];

  constructor() { }

  ngOnInit(): void {
  }

}
