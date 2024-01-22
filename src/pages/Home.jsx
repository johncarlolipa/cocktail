import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Homepage
      <Link to="/cocktail">Cocktail</Link>
    </div>
  );
}
