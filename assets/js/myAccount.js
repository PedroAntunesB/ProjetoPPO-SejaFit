import { putItems } from "./models/putModel.js  ";
const userData = JSON.parse(localStorage.getItem('usuario'));
putItems.putMyAccountData(userData, '.user-info');