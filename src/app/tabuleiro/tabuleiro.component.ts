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
		for (let i = 0; i < 5; i++){
			if (this.palavraUser.charAt(i) == this.palavraAdivinhar.charAt(i)){
				this.tabuleiro[this.linha][i].classe = "acerto";
				this.ganhou++;
			}else{
				if(this.palavraAdivinhar.indexOf(this.palavraUser.charAt(i)) > -1){
					if(this.palavraUser.lastIndexOf(this.palavraUser.charAt(i)) > i){
						this.tabuleiro[this.linha][i].classe = "lugarErrado";
					}else{
						this.tabuleiro[this.linha][i].classe = "erro";
					}
				}else{
					this.tabuleiro[this.linha][i].classe = "erro";
				}
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