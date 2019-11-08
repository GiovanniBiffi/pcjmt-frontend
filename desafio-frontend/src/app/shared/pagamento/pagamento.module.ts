
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento.component';



@NgModule({
    declarations: [PagamentoComponent],
    exports: [PagamentoComponent],
    imports:[CommonModule]
})
export class PagamentoModule{

}