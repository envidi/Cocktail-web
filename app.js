import presentDrinks from "./src/presentDrinks.js";
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

function loadDrink(){
  presentDrinks(URL);
}
window.addEventListener("DOMContentLoaded",loadDrink);


