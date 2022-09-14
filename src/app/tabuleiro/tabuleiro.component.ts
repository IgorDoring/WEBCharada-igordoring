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
		if (this.coluna<5){
			this.tabuleiro[this.linha][this.coluna].letra = letra;
			this.coluna += 1;
			this.palavraUser = this.palavraUser + letra.toUpperCase();
		}
	}

	apagarLetra(): void{
		if(this.coluna > 0&&this.linha < 6){
			this.coluna -= 1;
			this.tabuleiro[this.linha][this.coluna].letra = "";
			this.palavraUser = this.palavraUser.slice(0, this.coluna);
		}
	}

	adivinhar(tentativa: string[] = this.palavraUser.split(""), resposta: string[] = this.palavraAdivinhar.split("")): void {
		console.log(this.linha);
		if(this.coluna < 5){
			this.mensagem = "É obrigatório conter 5 letras.";
			return;
		}
		let ganhou: number = 0;
		// inicia o loop
		for(let i = 0; i < 5; i++){
			//checa se eh a mesma letra na mesma posicao
			console.log("tentativa: "+tentativa.join("")+" | resposta: "+resposta.join(""));
			console.log(i+" Letra tentativa = "+ tentativa[i]+" | Letra resposta = "+ resposta[i]);
			if(tentativa[i]==resposta[i]){ // se sim
				this.tabuleiro[this.linha][i].classe = "acerto";//classifica atributo classe do objeto como acerto
				ganhou++;//acumula um condição de vitória
				console.log(i+" Letra tentativa = "+ tentativa[i]+" | Letra resposta = "+ resposta[i]+" --- Acerto")
				resposta[i] = " ";
			}else{
				if(resposta.join("").indexOf(tentativa[i]) > -1){//se nao é, mas a letra existe na palavra
					this.tabuleiro[this.linha][i].classe = "lugarErrado";//classifica a letra atual como no lugar errado
					console.log(i+" Letra tentativa = "+ tentativa[i]+" | Letra resposta = "+ resposta.join("").indexOf(tentativa[i])+" --- Lugar Errado")
					resposta[resposta.join("").indexOf(tentativa[i])] = "";//descobre o index 
				}else{
					console.log(i+" Letra tentativa = "+ tentativa[i]+" | Letra resposta = "+ resposta.join("").indexOf(tentativa[i])+" --- Erro")
					this.tabuleiro[this.linha][i].classe = "erro";
				}	
			}
		}
		if(ganhou == 5){
			this.mensagem = "Descobriu!";
			this.linha = 7;
		}else{
			if(this.linha < 6){
				this.linha += 1;
				this.coluna = 0;
				this.palavraUser = "";
			}else{
				this.mensagem = "Não foi desta vez, mais sorte na próxima! A Palavra era "+this.palavraAdivinhar+".";
			}
		}
	}

	constructor() { }

	ngOnInit(): void {

	}
}