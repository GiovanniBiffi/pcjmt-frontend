import { Produto } from '../produto/produto';

export interface Categoria{
    categoria_titulo:string;
    categoria_produtos:Produto[];
}