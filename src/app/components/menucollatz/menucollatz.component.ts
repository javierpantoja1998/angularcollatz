import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {

  public numeros!:Array<number>

  constructor() {this.numeros = new Array<number>() }

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {

      var numAleatorio = Math.floor(Math.random()*10);
      this.numeros.push(numAleatorio);

    }
  }

}
