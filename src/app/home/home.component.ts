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

    this.alunos = "Cubo for Devs"
  }

  public alunos:string
  public pontos:number = 0
  public result:string = ''




  public linhas:Item[][] = [
    [  
      {
        ponto: 1,
        tipo: "bandera",
        id: this.generatorId()
      },
      {
        ponto: 2,
        tipo: "bandera",
        id: this.generatorId()
      },
      {
        ponto: 3,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 4,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 5,
        tipo: "bomba",
        id: this.generatorId()

      },
    ],
    [  {
        ponto: 1,
        tipo: "bomba",
        id: this.generatorId()

      },
      {
        ponto: 2,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 3,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 4,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 5,
        tipo: "bandera",
        id: this.generatorId()

      },
    ],
    [  {
        ponto: 1,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 2,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 3,
        tipo: "bomba",
        id: this.generatorId()

      },
      {
        ponto: 4,
        tipo: "bandera",
        id: this.generatorId()

      },
      {
        ponto: 5,
        tipo: "bandera",
        id: this.generatorId()

      },
    ]
  ] 


  bombaOubandeira(item:Item) {
    
    
    this.verifyIcon(item)


    if(item.tipo == 'bomba') {
      this.pontos = 0
      /*alert("opaaaa a bomba estourou e vc foi eliminado")*/
      this.result = "opaaaa a bomba estourou e você foi eliminado"
      return
    }

    this.pontos += 1
    this.result = "Você tem " + this.pontos + " pontos"
  }

  


  verifyIcon(item:Item){

    let icon = 'button.' + item.id
    const divIcon = document.querySelector(icon)

    if(item.tipo == 'bomba') {
      divIcon.innerHTML = '<i class="fas fa-bomb"></i>'
    }
    else {
      divIcon.innerHTML = `<i class="fas fa-flag"></i>`;
    }

  }



  generatorId () {
    return '_' + Math.random().toString(36).substr(2, 9);
  }




}
