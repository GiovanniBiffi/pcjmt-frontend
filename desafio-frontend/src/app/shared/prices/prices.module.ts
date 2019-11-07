import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices.component';


@NgModule({
    declarations: [PricesComponent],
    exports: [PricesComponent],
    imports:[CommonModule]
})

export class PricesModule{

}