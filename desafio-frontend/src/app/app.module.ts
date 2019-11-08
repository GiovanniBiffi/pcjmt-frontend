import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriaModule } from './shared/categoria/categoria.module';
import { OfferModule } from './shared/services/offers/offer/offer.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { ProdutoDetalhesModule } from './shared/produto/produto-detalhes/produto-detalhes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CategoriaModule,
    ProdutoDetalhesModule,
    OfferModule,
    CoreModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
