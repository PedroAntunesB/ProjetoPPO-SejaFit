import { putItems } from "../models/putModel.js";
import { results } from "../models/resultsModel.js";
import { bd } from "../data/bd.js";

export function checkTrain() {
    for (let el of bd.dataTrain) {
        if (el.check) {
            continue;
        }
        bd.resultsToday.calories_burned = el.cal;
        bd.resultsLastMonth.calories_burned += el.cal;
        el.check = true;
        break;
    }
    results.putResults();
    putItems.putTrainItems();
}

export function checkDiet() {
    for (let el of bd.dataDiet) {
        if (el.check) {
            continue;
        }
        bd.resultsToday.calories_consumed = el.cal;
        bd.resultsLastMonth.calories_consumed += el.cal;
        el.check = true;
        break;
    }
    results.putResults()
    putItems.putDietItems();
}
