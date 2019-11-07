import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card.component';
import { PricesModule } from '../prices/prices.module';


@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports:[PricesModule, RouterModule, CommonModule]
})
export class CardModule{

}