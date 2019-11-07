import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CategoriaModule } from './shared/categoria/categoria.module';
import { AppRoutingModule } from './app.routing.module';
import { OfferModule } from './shared/services/offers/offer/offer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CategoriaModule,
    OfferModule,
    CoreModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
