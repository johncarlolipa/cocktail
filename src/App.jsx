import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <h2>home</h2>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>About</h2>
      </div>
    ),
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
