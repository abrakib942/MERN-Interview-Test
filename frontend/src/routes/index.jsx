import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ViewDrawing from "../pages/ViewDrawing";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/drawing",
        element: <App />,
      },
    ],
  },
  {
    path: "/drawing/:id",
    element: <ViewDrawing />,
  },
]);

export default routes;
