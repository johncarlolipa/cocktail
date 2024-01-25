import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  let response = await axios.get(`${searchUrl}${searchTerm}`);
  return { drinks: response.data.drinks, searchTerm };
};

export default function LandingPage() {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </div>
  );
}
