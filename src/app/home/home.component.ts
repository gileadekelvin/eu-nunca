import { Component, OnInit } from '@angular/core';
import { perguntas } from '../constants/perguntas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  perguntas: any;

  perguntaEscolhida: string;
  idPergunta: number;

  showFinal: boolean;

  constructor() {
    this.idPergunta = 0;
    this.showFinal = false;
  }

  ngOnInit() {
    this.perguntas = perguntas.sort(() => Math.random() - 0.5);
    this.perguntaEscolhida = this.perguntas[0].pergunta;
    console.log(this.perguntas);
  }

  geraID() {

  }


  alteraPergunta() {
    this.idPergunta = this.idPergunta + 1;
    if (this.idPergunta < this.perguntas.length) {
      this.perguntaEscolhida = this.perguntas[this.idPergunta].pergunta;
    } else {
      this.showFinal = true;
    }
  }

}
