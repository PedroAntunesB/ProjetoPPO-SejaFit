import { newUser } from "./data/userBd.js";
import { putItems } from "./models/putModel.js  ";

putItems.putMyAccountData(newUser, '.user-info');