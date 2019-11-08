import { Image } from '../image/image';

export interface Produto{
    produto_id:number;
    produto_titulo:string;    
    produto_descricao:string;
    produto_desc_add:string;
    produto_preco:string;
    produto_preco_mercado:string;
    produto_imagem:Image;
    produto_imagens:Image[];
    produto_categoria:string;
}