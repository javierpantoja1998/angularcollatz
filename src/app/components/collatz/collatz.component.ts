import { Component, OnInit } from '@angular/core';
//Necesitamos recuperar los parametros de ruta
//Incluimos el router para rederigir por codigo
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css'],
})
export class CollatzComponent implements OnInit {
  //Recogemos el numero
  public numero!: number;
  public numeros: Array<number>;
  constructor(private _activedRouter: ActivatedRoute, private _router: Router) {
    this.numeros = new Array<number>();
  }
  doCollatz(): void {
    this.numeros = new Array<number>();
        //Hacemos el while para calcular el metodo Collatz
            while(this.numero != 1){
                if(this.numero % 2 == 0) {
                  this.numero /= 2
                }else{
                  this.numero = this.numero * 3 + 1
                }
                //Metemos los numeros del collatz al array numeros
                this.numeros.push(this.numero);
                console.log(this.numeros)
            }

  }
  ngOnInit(): void {
    this._activedRouter.params.subscribe((parametros: Params) => {

        //Hacemos el while para calcular el metodo Collatz
        console.log(parametros['numero'])
        this.numero = parseInt(parametros['numero']);

        this.doCollatz();



    });
  }
}
