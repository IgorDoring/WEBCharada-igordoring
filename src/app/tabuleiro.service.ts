import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
	providedIn: 'root'
})

export class TabuleiroService {

	linha: number = 0;
	coluna: number = 0;
	palavraUser: string = "";
	mensagem: any = {classe: "", text: ""};
	terminaJogo: boolean = false;
	letrasVerificadas: any[] = [{letra: "", classe: ""}];
	listaPalavras: string[] = ["sagaz","negro","mexer","termo","nobre","senso","algoz","afeto","plena","sutil","vigor","fazer","assim","audaz","sanar","inato","cerne","fosse","ideia","poder","moral","desde","muito","torpe","justo","honra","sobre","anexo","etnia","sonho","tange","amigo","lapso","expor","haver","tempo"];
	palavraAdivinhar: string = this.getPalavraAdivinhar();

	tabuleiro: any[][] = [
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}],
		[{letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}, {letra: "", classe: ""}]
	];


	getPalavraAdivinhar(): string {
		return this.listaPalavras[Math.floor(Math.random() * this.listaPalavras.length) + 1].toUpperCase();
	}

	resetGame(): void {
		window.location.reload();
	}

	checkLetra(tecla: string): string {
		let temp = "";
		for(let i = 0; i < this.letrasVerificadas.length; i++){
			if(this.letrasVerificadas[i].letra == tecla)
				temp = this.letrasVerificadas[i].classe;
		}
		return temp;
	}

	getLetra(letra: string) : void {
		if (this.coluna<5&&!this.terminaJogo){
			this.tabuleiro[this.linha][this.coluna].letra = letra;
			this.coluna += 1;
			this.palavraUser = this.palavraUser + letra.toUpperCase();
		}
	}

	apagarLetra(): void {
		if(this.coluna > 0&&!this.terminaJogo){
			this.coluna -= 1;
			this.tabuleiro[this.linha][this.coluna].letra = "";
			this.palavraUser = this.palavraUser.slice(0, this.coluna);
		}
	}

	addListaVerificada(letra: string, classe: string): void{
		let naoTemNaLista: boolean = true
		for(let j = 0; j < this.letrasVerificadas.length; j++){
			if(this.letrasVerificadas[j].letra == letra){
				if(this.letrasVerificadas[j].classe == "acerto"){
					return;
				}else if(this.letrasVerificadas[j].classe == "lugarErrado"){
					if(classe != "erro"){
						this.letrasVerificadas[j].classe = classe;
					}
					return;
				}else{
					this.letrasVerificadas[j].classe = "erro";
					return;
				}
				naoTemNaLista = false;
			}
		}
		if(naoTemNaLista)
			this.letrasVerificadas.push({letra: letra, classe: classe});
	}

	adivinhar(tentativa: string[] = this.palavraUser.split(""), resposta: string[]  = this.palavraAdivinhar.split("")): void {
		console.log(tentativa);
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
				this.addListaVerificada(tentativa[i], "acerto");
				resposta[i] = " ";
				if(ganhou == 5){
					this.mensagem.classe = "acerto";
					this.mensagem.text = "Descobriu! A Palavra era "+this.palavraAdivinhar+".";
					this.terminaJogo = true;
					return;
				}
			}else{
				if(resposta.join("").indexOf(tentativa[i]) > -1){
					this.tabuleiro[this.linha][i].classe = "lugarErrado";
					this.addListaVerificada(tentativa[i], "lugarErrado");
					resposta[resposta.join("").indexOf(tentativa[i])] = " ";
				}else{
					this.addListaVerificada(tentativa[i], "erro");
					this.tabuleiro[this.linha][i].classe = "erro";
				} 
			}
		}
		if(this.linha < 5){
			this.linha += 1;
			this.coluna = 0;
			this.palavraUser = "";
		}else{
			this.mensagem.classe = "erro";
			this.mensagem.text = "Não foi desta vez, mais sorte na próxima! A Palavra era "+this.palavraAdivinhar+".";
			this.terminaJogo = true;
		}
	}

	constructor(private router: Router) { }
}
