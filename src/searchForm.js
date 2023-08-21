import get from "./getElement.js";
import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';




async function searchForm(){
  const drinkInput = get("input[name='drink']");
  drinkInput.addEventListener("input",async (e)=>{
      const value = e.target.value;
      const searchDink = await fetchDrinks(URL);
      const data =  searchDink.drinks
      const result = data.filter((element)=>{
        return element.strDrink.toUpperCase().includes(value.toUpperCase());
      })
      displayDrinks(result)
      
      
      
      
  })
}
searchForm()