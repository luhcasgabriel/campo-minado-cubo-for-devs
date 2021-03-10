import { Component, OnInit } from '@angular/core';
import { Item } from '../modelos/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { /* classe  ue implementa uma interface */

  constructor() { } /* tem um construtor */

  ngOnInit(): void { /*inicializador da classe*/

    this.alunos = "alunos da live itau"
  }

  public alunos:string

  public pontos:number = 0


  public linhas:Item[][] = [
    [  {
        ponto: 1,
        tipo: "bandera"
      },
      {
        ponto: 2,
        tipo: "bandera"
      },
      {
        ponto: 3,
        tipo: "bandera"
      },
      {
        ponto: 4,
        tipo: "bandera"
      },
      {
        ponto: 5,
        tipo: "bomba"
      },
    ],
        [  {
        ponto: 1,
        tipo: "bomba"
      },
      {
        ponto: 2,
        tipo: "bandera"
      },
      {
        ponto: 3,
        tipo: "bandera"
      },
      {
        ponto: 4,
        tipo: "bandera"
      },
      {
        ponto: 5,
        tipo: "bandera"
      },
    ],
        [  {
        ponto: 1,
        tipo: "bandera"
      },
      {
        ponto: 2,
        tipo: "bandera"
      },
      {
        ponto: 3,
        tipo: "bomba"
      },
      {
        ponto: 4,
        tipo: "bandera"
      },
      {
        ponto: 5,
        tipo: "bandera"
      },
    ]
  ] 


  bombaOubandeira(item:Item) {
    if(item.tipo == 'bomba') {
      this.pontos = 0
      alert("opaaaa a bomba estourou e vc foi eliminado")
      return
    }

    this.pontos += 1
  }

}
