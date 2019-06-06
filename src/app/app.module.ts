import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfigModule } from '@spartacus/core';
import { translations, defaultCmsContentConfig, StorefrontModule } from '@spartacus/storefront';
import { PriceProposalComponent } from './price-proposal/price-proposal.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KymaInterceptor } from './interceptors/kyma.interceptor';
import { PriceComponent } from './price/price.component';
@NgModule({
  declarations: [
    AppComponent,
    PriceProposalComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://api.cqz1m-softwarea1-d44-public.model-t.cc.commerce.ondemand.com',
        }
      },
      // authentication: {
      //   client_id: 'mobile_android',
      //   client_secret: 'secret'
      // },
      site: {
        baseSite: 'electronics-spa'
      },
      i18n: {
        resources: translations
      }
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: KymaInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
