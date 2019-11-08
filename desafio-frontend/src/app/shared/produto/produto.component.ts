import { Component, Input } from '@angular/core';
import { OffersService } from '../services/offers/offers.service';
import { Offer } from '../services/offers/offer/offer';
import { Produto } from './produto';
import { ProdutoModule } from './produto.module';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html'

})

export class ProdutoComponent{
    @Input() produtos:Produto[] = [];

}