import { putItems } from './models/putModel.js';
import { results } from './models/resultsModel.js';
import { checkDiet, checkTrain } from './functions/buttonFuntions.js';

putItems.init();

results.putResults();
const btnCheckTrain = document.querySelector('#bt-train');
const btnCheckDiet = document.querySelector('#bt-diet');
btnCheckTrain.addEventListener('click', () => checkTrain());
btnCheckDiet.addEventListener('click', () => checkDiet());