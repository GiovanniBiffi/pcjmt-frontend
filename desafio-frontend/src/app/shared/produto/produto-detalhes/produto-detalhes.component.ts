import { Component, Input } from '@angular/core';
import { OffersService } from '../../services/offers/offers.service';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../../services/offers/offer/offer';
import { Produto } from '../produto';

@Component({
    selector: 'app-produto-detalhes',
    templateUrl: './produto-detalhes.component.html'

})

export class ProdutoDetalhesComponent{
 
    @Input() produto = {} as Produto; 
    produtoId: number;
    
    constructor(        
        private route: ActivatedRoute,
        private offersService: OffersService
    ){}

    ngOnInit(): void {
        this.produtoId = this.route.snapshot.params.produtoId;
        this.getOffer(this.produtoId);
    }

    getOffer(produtoId:number){
    
        this.offersService.getOffer(produtoId.toString()).subscribe(
            offer => {                            
                        
                this.produto.produto_id = offer["id"];
                this.produto.produto_titulo = offer["title"];;   
                this.produto.produto_descricao = offer["description"];    
                var price = Number(offer["price"]);
                this.produto.produto_preco = price.toLocaleString('pt-BR',{ style: 'currency', currency: 'BRL' });
                this.produto.produto_preco_mercado = offer["market_price"];
                this.produto.produto_imagens = offer["images"];
                this.produto.produto_categoria = offer["category"];

            },
            err =>{
                console.log("erro offer!");
            }                        
        );                    
        
    }
}