import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Home,  } from "./pages";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cocktail",
    element: (
      <div>
        <Cocktail />
      </div>
    ),
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
