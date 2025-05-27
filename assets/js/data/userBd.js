import { Bd } from "./bd.js";

class UserBd {
    constructor(nome, idade, peso, altura, fotoDePerfil) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.diasCompletos = 0;
        this.imc = Math.floor(peso / (altura * altura));
        this.fotoDePerfil = fotoDePerfil;
    }

    get contarDiasCompletos() {
        return this.diasCompletos += 1;
    }

}

export const newUser = new UserBd('Pedro', 17, 64, 1.70, 'xxxxx');