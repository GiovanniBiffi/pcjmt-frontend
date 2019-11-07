
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { CardModule } from '../card/card.module';
import { OffersModule } from '../services/offers/offers.module';
import { OffersService } from '../services/offers/offers.service';


@NgModule({
    declarations: [ProdutoComponent],
    exports: [ProdutoComponent],
    imports:[CardModule, OffersModule, CommonModule]
})
export class ProdutoModule{

}