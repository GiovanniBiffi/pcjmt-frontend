import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'

})

export class CardComponent{
    @Input() card_title:string = '';
    @Input() card_image_src:string = '';
    @Input() card_image_max_height:string = '125px';
    @Input() card_text:string = '';
    @Input() card_with_prices:boolean = false;
    @Input() card_price:string = '';
    @Input() card_price_market:string = '';
    @Input() card_link:string = '';
}