import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { ProdutoModule } from "../produto/produto.module";

@NgModule({
    declarations: [CategoriaComponent],
    exports: [CategoriaComponent],
    imports:[ProdutoModule, CommonModule]
})
export class CategoriaModule{

}