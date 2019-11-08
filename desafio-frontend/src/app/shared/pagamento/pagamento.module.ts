
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoComponent } from './pagamento.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
    declarations: [PagamentoComponent],
    exports: [PagamentoComponent],
    imports:[
        FormsModule,
        ReactiveFormsModule, 
        CommonModule
    ]
})
export class PagamentoModule{

}