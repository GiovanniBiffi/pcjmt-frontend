import { Component, Input } from '@angular/core';
import { OffersService } from '../services/offers/offers.service';
import { Offer } from '../services/offers/offer/offer';
import { Produto } from '../produto/produto';
import { Categoria } from './categoria';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { CategoriaModule } from './categoria.module';

@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html'

})

export class CategoriaComponent{
    @Input() categoria_title:string = 'Título padrão categoria';   


    @Input() offers:Offer[] = [];  
    @Input() offersLista:Offer[] = [];
    @Input() offr:Offer = null;
    produtos:Produto[] = [];
    @Input() categorias:Categoria[] = [];
    

    constructor(        
        private offersService: OffersService
    ){}

    ngOnInit(): void {
        this.getOffers();
    }

    produtoPush(produto:Produto){
        this.produtos.push(produto);        
    }

    categoriaPush(produtos:Produto[]){
        var groups = {} as Produto;
        for (var i = 0; i < produtos.length; i++) {
          var groupName = produtos[i].produto_categoria;
          if (!groups[groupName]) {
            groups[groupName] = [];
          }
          groups[groupName].push(produtos[i]);
        }
        var categorias = [];
        for (var groupName in groups) {
            categorias.push({categoria_title: groupName, categoria_produtos: groups[groupName]});
        }
        this.categorias = categorias;
        this.categorias.sort(function(a, b){
            if(a.categoria_titulo > b.categoria_titulo) { return -1; }
            if(a.categoria_titulo < b.categoria_titulo) { return 1; }
            return 0;
        });
    }

    getOffers(){

        this.offersService.listaOffers().subscribe(
            offers => {
                //console.log(offers);
                
                this.offers = this.offers.concat(offers);
                let response = []
                for (let off = 0; off < this.offers.length; off++) {                      
                    
                   this.offersService.getOffer(this.offers[off].id.toString()).subscribe(
                        offer => {                            
                    
                            var produto = new Object() as Produto;
                            //console.log(this.offers[off].id);
                            produto.produto_id = this.offers[off].id;
                            produto.produto_titulo = this.offers[off].title;   
                            produto.produto_descricao = this.offers[off].description;
                            produto.produto_desc_add = offer["description"];
                            produto.produto_preco = this.offers[off].price;
                            produto.produto_preco_mercado = this.offers[off].market_price;
                            produto.produto_imagem = this.offers[off].image;
                            produto.produto_imagens = offer["images"];
                            produto.produto_categoria = offer["category"];

                            //console.log(produto);
                            //this.produtoPush(produto);
                            this.produtos.push(produto);

                            if(off == this.offers.length - 1){
                                this.categoriaPush(this.produtos);
                                //console.log("categorias");
                                //console.log(this.categorias);
                            }
                        },
                        err =>{
                            console.log("erro offer!");
                        }                        
                    );                    
                }
               
                //console.log(this.offers);
            },
            err =>{
                console.log("erro! ");
            }
        );

        
    }

}