import { Link, useOutletContext } from "react-router-dom";

export default function CocktailCard({ image, name, id, info, glass }) {
  const data = useOutletContext();
  console.log(data);

  return (
    <div className="border border-black rounded overflow-hidden shadow-lg text-center">
      <Link to={`/cocktail/${id}`}>
        <img src={image} alt={name} className="w-full h-65 object-cover" />
      </Link>
      <div className="py-1">
        <Link to={`/cocktail/${id}`}>
          <h2 className="text-xl font-bold mb-2 mt-2">{name}</h2>
        </Link>
        <h5 className="text-sm mb-2">{glass}</h5>
        <p className="text-gray-700 mb-4">{info}</p>
      </div>
    </div>
  );
}
