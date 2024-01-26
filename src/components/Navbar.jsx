import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-lg font-semibold">
        <img src="../assets/glass-empty-wine-svgrepo-com.svg" />
      </Link>
    </nav>
  );
}
