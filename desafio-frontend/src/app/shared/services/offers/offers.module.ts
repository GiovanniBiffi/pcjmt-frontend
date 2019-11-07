import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [OffersComponent],
    exports: [OffersComponent],
    imports:[HttpClientModule, CommonModule]
})
export class OffersModule{

}