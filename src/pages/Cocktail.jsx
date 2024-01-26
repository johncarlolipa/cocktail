import { Link, Navigate, useLoaderData } from "react-router-dom";
import axios from "axios";

const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleUrl}${id}`);
  return { data, id };
};

export default function Cocktail() {
  const { id, data } = useLoaderData();

  if (!data) return <Navigate to="/" />;

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

  return (
    <div className="max-w-md mx-auto p-4 bg-white  rounded-md my-28">
      <div>
        <img
          src={image}
          alt={`Image of ${name}`}
          className="w-full h-68 object-cover mb-4 rounded-md"
        />
        <div>
          <h3 className="text-xl font-bold text-center my-8">{name}</h3>
          <p className="mb-2">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Info:</span> {info}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Glass:</span> {glass}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Ingredients:</span>{" "}
            {validIngredients.join(", ")}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Instructions:</span> {instructions}
          </p>
        </div>
      </div>
    </div>
  );
}
