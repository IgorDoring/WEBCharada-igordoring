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
	mensagem: string = "";
	acertou: boolean = false;
	primeiraRowTeclado: string[] = ['Q','W','E','R','T','Y','U','I','O','P'];
	segundaRowTeclado: string[] = ['Q','W','E','R','T','Y','U','I','O','P'];
	terceiraRowTeclado: string[] = ['Q','W','E','R','T','Y','U','I','O','P'];

	tabuleiro: any[][] = [
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}]
	];

	montarIndex(linha: any, id: any): string {
		return linha+"-"+id;
	}

	getLetra(letra: string) : void {
		if (this.coluna<5&&!this.acertou){
			this.tabuleiro[this.linha][this.coluna].letra = letra;
			this.coluna += 1;
			this.palavraUser = this.palavraUser + letra.toUpperCase();
		}
	}

	apagarLetra(): void{
		if(this.coluna > 0&&!this.acertou){
			this.coluna -= 1;
			this.tabuleiro[this.linha][this.coluna].letra = "";
			this.palavraUser = this.palavraUser.slice(0, this.coluna);
		}
	}

	adivinhar(tentativa: string[] = this.palavraUser.split(""), resposta: string[] = this.palavraAdivinhar.split("")): void {
		let ganhou: number = 0;
		if(this.coluna < 5){
			this.mensagem = "É obrigatório conter 5 letras.";
			return;
		}
		for(let i = 0; i < 5; i++){
			if(tentativa[i]==resposta[i]){
				this.tabuleiro[this.linha][i].classe = "acerto";
				ganhou++;
				resposta[i] = " ";
				if(ganhou == 5){
					this.mensagem = "Descobriu!";
					this.acertou = true;
					return;
				}
			}else{
				if(resposta.join("").indexOf(tentativa[i]) > -1){
					this.tabuleiro[this.linha][i].classe = "lugarErrado";
					resposta[resposta.join("").indexOf(tentativa[i])] = "";
				}else{
					this.tabuleiro[this.linha][i].classe = "erro";
				}	
			}
		}
		if(this.linha < 6){
			this.linha += 1;
			this.coluna = 0;
			this.palavraUser = "";
		}else{
			this.mensagem = "Não foi desta vez, mais sorte na próxima! A Palavra era "+this.palavraAdivinhar+".";
		}
	}

	constructor() { }

	ngOnInit(): void {

	}
}