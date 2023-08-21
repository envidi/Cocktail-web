import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

function displaySingleDrink(data){
    hideLoading()
    const singleDrink = data.drinks[0];
    const name = get(".drink-name");
    const image = get(".drink-img");
    const desc = get(".drink-desc");
    const ingredients = get(".drink-ingredients");
    console.log(data)
    const list = [
        singleDrink.strIngredient1,
        singleDrink.strIngredient2,
        singleDrink.strIngredient3,
        singleDrink.strIngredient4,
        singleDrink.strIngredient5
    ]

    name.innerHTML = singleDrink.strDrink;
    image.src = singleDrink.strDrinkThumb;
    desc.innerHTML = singleDrink.strInstructions;
    ingredients.innerHTML = list.map((element)=>{
        if(!element)return;
          return `<li><i class="far fa-check-square"></i>${element}</li>`;
    }).join("");

}
export default displaySingleDrink;