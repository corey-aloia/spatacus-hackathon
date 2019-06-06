import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';
import { KymaService } from '../services/kyma-service.service';
import { PriceSuggestion } from './price-suggestion';
@Component({
  selector: 'app-price-proposal',
  templateUrl: './price-proposal.component.html',
  styleUrls: ['./price-proposal.component.scss']
})
export class PriceProposalComponent implements OnInit {
  priceComponent;
  productDetailOutlets = ProductDetailOutlets;
  newPrice: Number;
  priceAccepted: boolean;
  constructor(private service: KymaService) {
  }

  ngOnInit() {
  }

  inspect(obj) {
    console.log(obj);
  }

  suggestPrice(productCode) {
    const priceSuggestion = new PriceSuggestion();
    priceSuggestion.productCode = productCode;
    priceSuggestion.suggestedPrice = this.newPrice;
    this.service.suggestPrice(priceSuggestion).subscribe(
      accepted => {
      this.priceAccepted = accepted;
    },
    error => console.error(error));
  }

}
