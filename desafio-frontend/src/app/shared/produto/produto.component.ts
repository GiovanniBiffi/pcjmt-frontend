import { Component, Input } from '@angular/core';
import { OffersService } from '../services/offers/offers.service';
import { Offer } from '../services/offers/offer/offer';

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

    @Input() offers:Offer[] = [];  
    @Input() offersLista:Offer[] = [];
    @Input() offr:Offer = null;

    constructor(        
        private offersService: OffersService
    ){}

    ngOnInit(): void {
        this.test();
    }

    test(){
        this.offersService.listaOffers().subscribe(
            offers => {
                //console.log(offers);
                this.offers = this.offers.concat(offers);
                for (var off in this.offers) {                     
                    //console.log(this.offersLista[off].id);
                    this.offersService.getOffer(this.offers[off].id.toString()).subscribe(
                        offer => {
                            console.log(offer);
                        },
                        err =>{
                            console.log("erro offer!");
                        }

                    );
                }
            },
            err =>{
                console.log("erro! ");
            }
        ); 
    }
}