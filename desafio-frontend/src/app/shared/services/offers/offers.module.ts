import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';

@NgModule({
    declarations: [OffersComponent],
    exports: [OffersComponent],
    imports:[CommonModule]
})
export class OffersModule{

}