import { Bd } from "./bd.js";

class UserBd {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.diasCompletos = 0;
        this.imc = (peso / (altura * altura)).toFixed();
    }

    get contarDiasCompletos() {
        return this.diasCompletos += 1;
    }

}

export default UserBd