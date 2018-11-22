import str from './models/Search';
// import { add, multiply, ID } from './views/searchView';
// import { add as a, multiply as m, ID } from './views/searchView';
import * as searchView from './views/searchView';

// console.log(`Using imported functions! ${add(ID, 2)} and ${multiply(3,5)}. ${str}`);
// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3,6)}. ${str}`);
console.log(`Using imported functions! ${searchView.add(searchView.ID, 5)} and ${searchView.multiply(3, 8)}. ${str}`);