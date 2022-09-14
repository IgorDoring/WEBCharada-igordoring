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

	adivinhar(tentativa: string[] = this.palavraUser.split(""), resposta: string[] = this.palavraAdivinhar.split("")): void {
		if(this.coluna == 6){
			this.mensagem = "É obrigatório conter 5 letras.";
			return;
		}
		let ganhou: number = 0;
		// inicia o loop
		for(let i = 0; i < 5; i++){
			if(tentativa[i]==resposta[i]){
				this.tabuleiro[this.linha][i].classe = "acerto";
				ganhou++;
			}else if(resposta.join("").indexOf(tentativa[i], i) > -1){
				this.tabuleiro[this.linha][i].classe = "lugarErrado";
				resposta[resposta.join("").indexOf(tentativa[i]), i] = "";
			}else{
				this.tabuleiro[this.linha][i].classe = "erro";
			}
		}
		if(ganhou == 5){
			this.mensagem = "GANHOU! A Palavra era "+this.palavraAdivinhar+"!";
		}else{
			if(this.linha < 6){
				this.mensagem = "Não foi desta vez, mais sorte na próxima! A Palavra era "+this.palavraAdivinhar+".";
			}
		}

		// inicia loop
		// for (let i = 0; i < 5; i++){
		// 	//se a letra da coluna da palavra do usuario for a mesma letra da mesma coluna da palavra chave
		// 	if (this.palavraUser.charAt(i) == this.palavraAdivinhar.charAt(i)){
		// 		//se sim, classifica a letra como um acerto, cinco acertos ganha o jogo
		// 		this.tabuleiro[this.linha][i].classe = "acerto";
		// 		this.ganhou++;
		// 		if(this.ganhou==5){
		// 			mensagem = "GANHOU! A Palavra era "+this.palavraAdivinhar+"!";
		// 			break;
		// 		}
		// 	//se nao
		// 	}else{
		// 		//checa se a letra existe na palavra
		// 		if(this.palavraAdivinhar.indexOf(this.palavraUser.charAt(i)) > -1){
		// 			//se sim, checa se só existe uma daquela letra na palavra
		// 			if(this.palavraAdivinhar.indexOf(this.palavraUser.charAt(i))== 
		// 				this.palavraAdivinhar.lastIndexOf(this.palavraUser.charAt(i))){
		// 				//se for uma letra soh, classifica letra como no lugar errado
		// 					this.tabuleiro[this.linha][i].classe = "lugarErrado";
		// 			}else{
		// 			}
		// 		//se não, a letra esta errada
		// 		}else{ 
		// 			this.tabuleiro[this.linha][i].classe = "erro";
		// 		}
		// 	}
		// }
		// 	if(this.linha==5){
		// 		alert("todas as tentativas usadas");
		// 	}else{
		// 		this.ganhou = 0;
		// 		this.linha += 1;
		// 		this.coluna = 0;
		// 		this.palavraUser = "";
			
		// }
	}

	constructor() { }

	ngOnInit(): void {

	}
}