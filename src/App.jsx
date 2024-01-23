import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Error, Home, LandingPage } from "./pages";

import { loader as landingLoader } from "./pages/LandingPage";

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
        path: "/cocktail",
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
