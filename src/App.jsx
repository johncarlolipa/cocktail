import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";
import { Cocktail, Error, Home, LandingPage } from "./pages";

import { loader as landingLoader } from "./pages/LandingPage";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import Newsletter, {
  action as newsletterAction,
} from "./components/Newsletter";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
