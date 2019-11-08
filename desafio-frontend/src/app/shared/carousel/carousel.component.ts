import { Component, Input } from '@angular/core';
import { Image } from '../image/image';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html'

})

export class CarouselComponent{
    @Input() images:Image[] = [];    
}