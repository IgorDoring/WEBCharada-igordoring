import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})

export class TabuleiroComponent implements OnInit {

  tabuleiro: any[][] = [
    [{letra: "A1", classe: ""}, {letra: "B1", classe: ""}, {letra: "C1", classe: ""}, {letra: "D1", classe: ""}, {letra: "E1", classe: ""}],
    [{letra: "A2", classe: ""}, {letra: "B2", classe: ""}, {letra: "C2", classe: ""}, {letra: "D2", classe: ""}, {letra: "E2", classe: ""}],
    [{letra: "A3", classe: ""}, {letra: "B3", classe: ""}, {letra: "C3", classe: ""}, {letra: "D3", classe: ""}, {letra: "E3", classe: ""}],
    [{letra: "A4", classe: ""}, {letra: "B4", classe: ""}, {letra: "C4", classe: ""}, {letra: "D4", classe: ""}, {letra: "E4", classe: ""}],
    [{letra: "A5", classe: ""}, {letra: "B5", classe: ""}, {letra: "C5", classe: ""}, {letra: "D5", classe: ""}, {letra: "E5", classe: ""}],
    [{letra: "A6", classe: ""}, {letra: "B6", classe: ""}, {letra: "C6", classe: ""}, {letra: "D6", classe: ""}, {letra: "E6", classe: ""}]
  ];

  montarIndex(linha: any, coluna: any): string {
    return linha + "-" + coluna;
  }

  getLetra() : void {
    alert(JSON.stringify(this));
  }

  constructor() { }

  ngOnInit(): void {
  }


}
