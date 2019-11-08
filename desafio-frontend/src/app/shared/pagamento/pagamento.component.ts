import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-pagamento',
    templateUrl: './pagamento.component.html'

})

export class PagamentoComponent{
     
    @Input() ispago:boolean = false;
    cartaoForm : FormGroup;

     constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit() : void{
    this.cartaoForm = this.formBuilder.group({
        cartaoNumero:['',
            [
              Validators.minLength(16),
              Validators.maxLength(16)
            ]
        ],
        cartaoNome:['',
            [                     
              Validators.minLength(5),
              Validators.maxLength(100)
            ]
        ],
        cartaoValidade:['', 
            [                       
                Validators.minLength(5),
                Validators.maxLength(5)
            ]
        ],
        cartaoCodSeg:['',
            [
                Validators.minLength(3),
                Validators.maxLength(3)
            ]
        ]
    });
}

     enviaCartao(){
         this.ispago = true;         
     }
}