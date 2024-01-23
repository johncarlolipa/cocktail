import { Link } from "react-router-dom";
import axios from "axios";

const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleUrl}${id}`);
  return { data, id };

  return null;
};
export default function Cocktail() {
  return (
    <div>
      Cocktail
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
