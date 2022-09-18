import { Component, OnInit } from '@angular/core';
import {TabuleiroService} from "../tabuleiro.service";

@Component({
	selector: 'app-tabuleiro',
	templateUrl: './tabuleiro.component.html',
	styleUrls: ['./tabuleiro.component.css']
})

export class TabuleiroComponent implements OnInit {
	linha: number;
	coluna: number;
	palavraUser: string;
	palavraAdivinhar: string;
	letrasVerificadas: any[];
	mensagem: any;
	terminaJogo: boolean;
	tabuleiro: any[][];

	resetGame(){
		this.tabuleiroService.resetGame();
	}

	checkLetra(tecla: string){
		return this.tabuleiroService.checkLetra(tecla);
	}

	getLetra(letra: string){
		this.tabuleiroService.getLetra(letra);
	}

	apagarLetra(){
		this.tabuleiroService.apagarLetra();
	}

	adivinhar(){
		this.tabuleiroService.adivinhar();
	}

	constructor(public tabuleiroService: TabuleiroService) { 
		this.linha = this.tabuleiroService.linha;
		this.coluna = this.tabuleiroService.coluna;
		this.palavraUser = this.tabuleiroService.palavraUser;
		this.palavraAdivinhar = this.tabuleiroService.palavraAdivinhar;
		this.letrasVerificadas = this.tabuleiroService.letrasVerificadas;
		this.mensagem = this.tabuleiroService.mensagem;
		this.terminaJogo= this.tabuleiroService.terminaJogo;
		this.tabuleiro = this.tabuleiroService.tabuleiro;

	}

	ngOnInit(): void {

	}
}