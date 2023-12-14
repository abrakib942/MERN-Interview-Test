import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      { path: "/drawing/:id", element: DrawingPage },
    ],
  },
]);

export default routes;
