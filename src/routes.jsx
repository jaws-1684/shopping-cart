import ErrorPage from "./routes/ErrorPage"
import App from "./App"
import Home from "./routes/Home"
import Shop from "./routes/Shop";
import {productLoader } from "./App"
const routes = [
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    loader: productLoader,
     HydrateFallback: () => null,
     children: [
        { index: true, element: <Home />},
        { path: "/shop", element: <Shop />}
    ],
  },
];

export default routes;