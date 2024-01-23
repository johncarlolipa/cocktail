import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleUrl}${id}`);
  return { data, id };
};
export default function Cocktail() {
  const { id, data } = useLoaderData();

  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  console.log(validIngredients);

  return (
    <div>
      <header>
        <Link to="/">Back Home</Link>
        <h3>{name}</h3>
      </header>
      <div>
        <img src={image} alt={`Image of ${name}`} />
        <div>
          <p>
            <span>name: </span>
            {name}
          </p>
          <p>
            <span>category: </span>
            {category}
          </p>
          <p>
            <span>info: </span>
            {info}
          </p>
          <p>
            <span>glass: </span>
            {glass}
          </p>
          <p>
            <span>ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span>instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </div>
  );
}
