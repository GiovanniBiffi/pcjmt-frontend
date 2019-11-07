
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { CardModule } from '../card/card.module';
import { OffersModule } from '../services/offers/offers.module';


@NgModule({
    declarations: [ProdutoComponent],
    exports: [ProdutoComponent],
    imports:[CardModule, CommonModule]
})
export class ProdutoModule{

}