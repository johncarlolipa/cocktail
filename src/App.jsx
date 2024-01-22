import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Cocktail, Home, LandingPage } from "./pages";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/cocktail",
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
      {
        index: true,
        element: (
          <div>
            <LandingPage />
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
