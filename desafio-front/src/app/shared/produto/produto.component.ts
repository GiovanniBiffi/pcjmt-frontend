import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html'

})

export class ProdutoComponent{
    @Input() produto_id:string = '0';
    @Input() produto_titulo:string = 'Título padrão produto';    
    @Input() produto_descricao:string = 'Descrição padrão produto';   
    @Input() produto_preco:string = 'R$ 0,00 produto';
    @Input() produto_preco_mercado:string = 'R$ 0,00 produto mercado';  
    @Input() produto_imagem:string = 'https://cdnbr2.img.sputniknews.com/images/1202/87/12028777.jpg'; 
}