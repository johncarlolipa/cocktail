import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Error, Home, LandingPage } from "./pages";

import { loader as landingLoader } from "./pages/LandingPage";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <div>
            <LandingPage />
          </div>
        ),
        loader: landingLoader,
      },
      {
        path: "/cocktail/:id",
        errorElement: <Error />,
        loader: singleCocktailLoader,
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
