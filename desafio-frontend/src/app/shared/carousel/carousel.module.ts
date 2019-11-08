import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PricesModule } from '../prices/prices.module';
import { CarouselComponent } from './carousel.component';


@NgModule({
    declarations: [CarouselComponent],
    exports: [CarouselComponent],
    imports:[PricesModule, RouterModule, CommonModule]
})
export class CarouselModule{

}