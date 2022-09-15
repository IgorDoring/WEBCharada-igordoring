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
	mensagem: any = {classe: "", text: ""};
	acertou: boolean = false;
	letrasVerificadas: any[] = [{letra: "", classe: ""}];

	tabuleiro: any[][] = [
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
	[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}]
	];

	checkLetra(tecla: string): string {
		let classe = "";
		for(let i = 0; i < this.letrasVerificadas.length; i++){
			if(this.letrasVerificadas[i].letra == tecla)
				classe = this.letrasVerificadas[i].classe;
		}
		return classe;
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
			this.mensagem.classe = "aviso";
			this.mensagem.text = "É obrigatório conter 5 letras.";
			return;
		}
		for(let i = 0; i < 5; i++){
			if(tentativa[i]==resposta[i]){
				this.tabuleiro[this.linha][i].classe = "acerto";
				ganhou++;
				this.letrasVerificadas.push({letra: tentativa[i], classe: "acerto"});
				resposta[i] = " ";
				if(ganhou == 5){
					this.mensagem.classe = "acerto";
					this.mensagem.text = "Descobriu!";
					this.acertou = true;
					return;
				}
			}else{
				if(resposta.join("").indexOf(tentativa[i]) > -1){
					this.tabuleiro[this.linha][i].classe = "lugarErrado";
				this.letrasVerificadas.push({letra: tentativa[i], classe: "lugarErrado"});
					resposta[resposta.join("").indexOf(tentativa[i])] = " ";
				}else{
					this.letrasVerificadas.push({letra: tentativa[i], classe: "erro"});
					this.tabuleiro[this.linha][i].classe = "erro";
				}	
			}
		}
		if(this.linha < 5){
			this.linha += 1;
			this.coluna = 0;
			this.palavraUser = "";
			this.mensagem.classe = "aviso";
			this.mensagem.text = "Errado! Tente novamente.";
		}else{
			this.mensagem.classe = "erro";
			this.mensagem.text = "Não foi desta vez, mais sorte na próxima! A Palavra era "+this.palavraAdivinhar+".";
		}
	}

	constructor() { }

	ngOnInit(): void {

	}
}