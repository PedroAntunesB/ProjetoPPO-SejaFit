import UserBd from "../data/userBd.js";

function btLogin(obj) {
    const { nome, idade, peso, altura } = obj;
    const user = new UserBd(nome, idade, peso, altura);
}

export default btLogin;