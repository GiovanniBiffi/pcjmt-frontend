import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from './shared/services/offers/offer/offer.component';
import { CategoriaComponent } from './shared/categoria/categoria.component';

const routes: Routes = [
    {   
        path : '', 
        pathMatch : 'full',
        redirectTo : 'categorias'
    },
    {
        path : 'categorias', 
        component: CategoriaComponent,      
        data:{
            title:'Categorias'
        } 
    },        
    {
        path : 'offer/:offerId', 
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