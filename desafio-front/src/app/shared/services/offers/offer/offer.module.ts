import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OfferComponent } from './offer.component';



@NgModule({
    declarations: [OfferComponent],
    exports: [OfferComponent],
    imports:[CommonModule]
})
export class OfferModule{

}