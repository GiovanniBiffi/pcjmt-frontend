import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './shared/categoria/categoria.component';
import { ProdutoDetalhesComponent } from './shared/produto/produto-detalhes/produto-detalhes.component';

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
        path : 'produto/:produtoId', 
        component: ProdutoDetalhesComponent,      
        data:{
            title:'Produto'
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