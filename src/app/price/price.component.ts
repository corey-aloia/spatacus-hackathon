import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  productDetailOutlets = ProductDetailOutlets;
  constructor() {
    console.log('here I am!');
   }

  ngOnInit() {
  }

}
