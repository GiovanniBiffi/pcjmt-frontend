import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './shared/card/card.component';
import { OfferComponent } from './shared/services/offers/offer/offer.component';

const routes: Routes = [
    {   
        path : '', 
        pathMatch : 'full',
        redirectTo : 'home'
    },        
    {
        path : 'offer', 
        component: OfferComponent,      
        data:{
            title:'Offer'
        } 
    }
];

@NgModule({
    imports: [ 
        // Para não precisar configurar resposta index do servidor. useHash = true
        // RouterModule.forRoot(routes)
        RouterModule.forRoot(routes, {useHash:true})
    ],
    exports: [ RouterModule ]

})
export class AppRoutingModule{


}