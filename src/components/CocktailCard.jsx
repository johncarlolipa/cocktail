import { Link } from "react-router-dom";

export default function CocktailCard({ image, name, id, info, glass }) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`}> details</Link>
      </div>
    </>
  );
}
