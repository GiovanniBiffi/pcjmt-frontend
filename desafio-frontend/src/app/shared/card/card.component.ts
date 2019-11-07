import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html'

})

export class CardComponent{
    @Input() card_title:string = 'Título padrão';
    @Input() card_image_src:string = 'https://cdnbr2.img.sputniknews.com/images/1202/87/12028777.jpg';
    @Input() card_text:string = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    @Input() card_with_prices:boolean = false;
    @Input() card_price:string = "";
    @Input() card_price_market:string = "";
}