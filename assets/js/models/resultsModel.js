import { bd } from "../data/bd.js";
class ResultsClass {
    constructor(dataResultsToday, dataResultsLastMonth) {
        this.divToday = document.querySelector('.div-Today');
        this.divLastMonth = document.querySelector('.div-lastMonth');
        this.dataResultsLastMonth = dataResultsLastMonth;
        this.dataResultsToday = dataResultsToday;
    }

    putResults() {
        this.divToday.innerHTML = this.innerFunction(this.dataResultsToday);
        this.divLastMonth.innerHTML = this.innerFunction(this.dataResultsLastMonth);
    }

    verifyResults(results) {
        if (results.calories_total() < 0) {
            return 'Situação: Deficit calórico';
        } else if (results.calories_total() == 0) {
            return 'Situação: Balanceado'
        }
        else {
            return 'Situação: Superavit calórico';
        }
    }


    innerFunction(data) {
        return `<p>Calorias queimadas: ${data.calories_burned}cal</p>
                             <p>Calorias consumidas: ${data.calories_consumed}cal</p>
                             <p>Calorias Totais do dia: ${data.calories_total()}cal</p>
                             <h2>${this.verifyResults(data)}</h2>`;
    }
};

export const results = new ResultsClass(bd.resultsToday, bd.resultsLastMonth);