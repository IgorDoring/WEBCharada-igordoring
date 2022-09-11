import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tabuleiro',
	templateUrl: './tabuleiro.component.html',
	styleUrls: ['./tabuleiro.component.css']
})

export class TabuleiroComponent implements OnInit {

	linha: number = 0;
	coluna: number = 0;
	palavraUser: string = "";
	palavraAdivinhar: string = "ASSAR";
	ganhou: number = 0;

	tabuleiro: any[][] = [
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}]
	];

	montarIndex(linha: any, coluna: any): string {
		return linha + "-" + coluna;
	}

	getLetra(letra: string) : void {
		if (this.coluna<5&&this.linha<6){
			this.tabuleiro[this.linha][this.coluna].letra = letra;
			this.coluna += 1;
			this.palavraUser = this.palavraUser + letra.toUpperCase();
		}
	}

	apagarLetra(): void{
		if(this.coluna > 0&&this.linha<6){
			this.coluna -= 1;
			this.tabuleiro[this.linha][this.coluna].letra = "";
			this.palavraUser = this.palavraUser.slice(0, this.coluna);
		}
	}

	adivinhar(): void {
			for (let j = 0; j < 5; j++){
				if (this.palavraUser.charAt(j) == this.palavraAdivinhar.charAt(j)){
					this.tabuleiro[this.linha][j].classe = "acerto";
					this.ganhou++;
					continue;
				}
				if(this.palavraUser.charAt(j) != this.palavraAdivinhar.charAt(j)&&
					this.palavraAdivinhar.indexOf(this.palavraUser.charAt(j)) > -1){
					this.tabuleiro[this.linha][j].classe = "lugarErrado";
					continue;
				}
				if(this.palavraUser.charAt(j) != this.palavraAdivinhar.charAt(j)&&
					this.palavraAdivinhar.indexOf(this.palavraUser.charAt(j)) == -1){
					this.tabuleiro[this.linha][j].classe = "erro";
					continue;
				}
			}
			if(this.ganhou==5){
				alert("ganhou");
			}else{
				if(this.linha==5){
					alert("todas as tentativas usadas");
				}else{
					this.ganhou = 0;
					this.linha += 1;
					this.coluna = 0;
					this.palavraUser = "";
				}
			}
	}

	constructor() { }

	ngOnInit(): void {

	}
}