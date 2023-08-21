import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";



async function presentDrinks(url){
  const data = await fetchDrinks(url);
  const convertData = await data.drinks;
  const section = await displayDrinks(convertData);
  
  if(section){
    setDrink(section);
  }


}
export default presentDrinks