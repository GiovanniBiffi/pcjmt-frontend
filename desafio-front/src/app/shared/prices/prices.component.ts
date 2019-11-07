import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-prices',
    templateUrl: './prices.component.html'

})

export class PricesComponent{
    @Input() preco:string = 'R$ 0,00';
    @Input() preco_mercado:string = 'R$ 0,00';  
}