import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
    <nav>navbar</nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
