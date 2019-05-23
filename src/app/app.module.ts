import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StorefrontModule } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';
import { translations } from '@spartacus/storefront';
import { defaultCmsContentConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://cds-1905-k8s-eu.prod.argonauts.cd.ydev.hybris.com:9002',
          prefix: '/rest/v2/'
        }
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      },
      site: {
        baseSite: 'electronics'
      },
      i18n: {
        resources: translations
      }
    }),
    ConfigModule.withConfigFactory(defaultCmsContentConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
