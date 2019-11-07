import { Component, Input } from '@angular/core';
import { OffersService } from '../services/offers/offers.service';

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html'

})

export class ProdutoComponent{
    @Input() produto_id:string = '0';
    @Input() produto_titulo:string = 'Título padrão produto';    
    @Input() produto_descricao:string = 'Descrição padrão produto';   
    @Input() produto_preco:string = 'R$ 10,00';
    @Input() produto_preco_mercado:string = 'R$ 20,00';  
    @Input() produto_imagem:string = 'https://cdnbr2.img.sputniknews.com/images/1202/87/12028777.jpg'; 

    constructor(        
        private offersService: OffersService
    ){}

    ngOnInit(): void {

    }

    test(){
        this.offersService.listaOffers().subscribe(
            offers => {
                console.log(offers);
            },
            err =>{
                console.log("erro! ");
            }
        );            
    }
}