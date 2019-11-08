
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ProdutoDetalhesComponent } from './produto-detalhes.component';
import { OffersModule } from '../../services/offers/offers.module';
import { CarouselModule } from '../../carousel/carousel.module';


@NgModule({
    declarations: [ProdutoDetalhesComponent],
    exports: [ProdutoDetalhesComponent],
    imports:[RouterModule, CarouselModule, OffersModule, CommonModule]
})
export class ProdutoDetalhesModule{

}