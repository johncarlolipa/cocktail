
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Error, Home, LandingPage } from "./pages";

import { loader as landingLoader } from "./pages/LandingPage";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import Newsletter, {
  action as newsletterAction,
} from "./components/Newsletter";

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
            <Newsletter />
          </div>
        ),
        loader: landingLoader,
        action: newsletterAction,
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
