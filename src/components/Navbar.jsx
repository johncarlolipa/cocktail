import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 p-4 flex justify-between items-center fixed top-0 w-full z-10">
      <Link to="/" className="text-lg font-semibold flex">
        <img
          src="/public/glass-empty-wine-svgrepo-com.svg"
          className="h-8 w-10 ml-10"
          alt="glass"
        />
        <h3 className="italic">Cocktail Smoky</h3>
      </Link>
    </nav>
  );
}
