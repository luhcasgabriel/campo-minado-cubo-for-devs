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
  public lose:boolean = false
  public result:string = 'Você tem 0 pontos'




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
    ]

  ] 


  bombaOubandeira(item:Item) {

    if(this.lose) {
      window.location.reload();
      return
    }

    this.verifyIcon(item)


    if(item.tipo == 'bomba') {
      
      this.result = "opaaaa a bomba estourou e você foi eliminado com " + this.pontos + " pontos"
      this.pontos = 0
      this.lose = true

      setTimeout(() => {
        window.location.reload();
      }, 5000);



      return
    }

    this.pontos += 1
    this.result = "Você tem " + this.pontos + " pontos"
  }

  


  verifyIcon(item:Item){

    let icon = 'button.' + item.id
    const divIcon = document.querySelector(icon)

    if(item.tipo == 'bomba') {
      divIcon.innerHTML = '<i class="fas fa-bomb bomba" style="color:   rgb(252, 104, 104) ; width: 100%; font-size: 32px;"></i>'
    }
    else {
      divIcon.innerHTML = `<i  class="fas fa-flag" style="color:  rgb(87, 202, 223); width: 100%;  font-size: 32px;"></i>`;
    }

  }



  generatorId () {
    return '_' + Math.random().toString(36).substr(2, 9);
  }




}
