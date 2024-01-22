import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Error, Home, LandingPage } from "./pages";

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
