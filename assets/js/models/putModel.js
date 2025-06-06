import { bd } from "../data/bd.js";
class PutClass {
    constructor(dataDiet, dataTrain) {
        this.divTreino = document.querySelectorAll('.div-train');
        this.dietDiv = document.querySelectorAll('.div-diet');
        this.dataDiet = dataDiet;
        this.dataTrain = dataTrain;
    }

    putDietItems() {
        let index = 0;
        this.dietDiv.forEach((div) => {
            div.innerHTML = `<h3>Dieta do dia: ${this.dataDiet[index].plano_alimentar}</h3>
            <ul>
            ${this.dataDiet[index].refeicoes.map((i) => `<li>${i}</li>`).join('')}
            </ul>`;
            if (this.dataDiet[index].check) {
                const parent = div.parentElement;
                parent.children[0].classList.add('checked');
            }
            index++;
        });

    }

    putTrainItems() {
        let index = 0;
        this.divTreino.forEach((div) => {
            div.innerHTML = `<h3>Grupo Muscular do dia: ${this.dataTrain[index].grupo_muscular}</h3>
            <ul>
                ${this.dataTrain[index].day_train.map((i) => `<li>${i}</li>`).join('')}
            </ul>`;
            if (this.dataTrain[index].check) {
                const parent = div.parentElement;
                parent.children[0].classList.add('checked');
            }
            index++;
        });
    };

    putMyAccountData(user, divQuerry) {
        const div = document.querySelector(divQuerry);
        if (!user) {
            return alert("Você não esta logado")
        }
        div.innerHTML = `   
                <h2>${user.nome}</h2>
                <p><strong>Idade:</strong>${user.idade}</p>
                <p><strong>IMC:</strong>${user.imc}</p>
                <p><strong>Peso: </strong> ${user.peso}</p>
                <p><strong>Altura: </strong> ${user.altura}</p>
                <p><strong>Dias Completos: </strong> ${user.diasCompletos}</p>`
    }

    init() {
        this.putDietItems();
        this.putTrainItems();
    }
}

export const putItems = new PutClass(bd.dataDiet, bd.dataTrain);