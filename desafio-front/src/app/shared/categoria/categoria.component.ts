import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html'

})

export class CategoriaComponent{
    @Input() categoria_title:string = 'Título padrão categoria';   
}