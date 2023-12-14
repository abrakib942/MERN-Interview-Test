import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DrawingPage from "../pages/drawingPage";

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
    element: <DrawingPage />,
  },
]);

export default routes;
