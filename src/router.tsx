import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootPage from "./elements/Root";
import ProjectPage from "./pages/Project";
import SkillPage from "./pages/Skill";

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "project", element: <ProjectPage /> },
      { path: "skill", element: <SkillPage /> },
      { path: "contact", element: <h1>Contact</h1> },
      { path: "*", element: <h1>Not Found Bro</h1> },
    ],
  },
]);

export default router;
