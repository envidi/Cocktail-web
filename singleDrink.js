import displaySingleDrink from "./src/displaySingleDrink.js";
import fetchDrinks from "./src/fetchDrinks.js";
async function showSingleDrink(){
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i';

    const id = localStorage.getItem("drink");
    if(!id){
        window.location.replace('index.html');
    }
    else{
        const dataSingle = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displaySingleDrink(dataSingle);
    }
 
    

}
window.addEventListener("DOMContentLoaded",showSingleDrink)