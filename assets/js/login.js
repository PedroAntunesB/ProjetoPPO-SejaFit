import UserBd from "./data/userBd.js";
const input = document.querySelectorAll('input');

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const valuesObj = {
        nome: input[0].value,
        idade: input[1].value,
        peso: input[2].value,
        altura: input[3].value
    }
    const { nome, idade, peso, altura } = valuesObj;
    let user = new UserBd(nome, idade, peso, altura);
    localStorage.setItem('usuario', JSON.stringify(user));
    window.location.href = '/myAccount.html'
});