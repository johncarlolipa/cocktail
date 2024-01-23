import axios from "axios";
import { useLoaderData } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchTerm = "margarita";
  let response = await axios.get(`${url}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

export default function LandingPage() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return <div>Landing</div>;
}
