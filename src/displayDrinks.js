import { hideLoading } from "./toggleLoading.js"
import get from "./getElement.js";

const displayDrinks = async (data)=>{
  hideLoading();
  const section = get(".section-center");
  

  const htmls = data.map((element,index)=>{
    const { idDrink : id,strDrink : name,strDrinkThumb:image} = element;
    return ` <a href="drink.html">
    <article class="cocktail" data-id="${id}">
      <img src="${image}" alt="" />
      <h3>${name}</h3>
    </article>
  </a>`
  })
  section.innerHTML = htmls.join("");

  return section;


}
export default displayDrinks