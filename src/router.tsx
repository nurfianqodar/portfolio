import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootPage from "./elements/Root";

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "project", element: <h1>Project</h1> },
      { path: "skill", element: <h1>Skill</h1> },
      { path: "contact", element: <h1>Contact</h1> },
      { path: "*", element: <h1>Not Found Bro</h1> },
    ],
  },
]);

export default router;
