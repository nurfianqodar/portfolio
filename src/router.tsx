import { createHashRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootPage from "./elements/Root";
import ProjectPage from "./pages/Project";
import SkillPage from "./pages/Skill";
import NotFoundPage from "./pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "project", element: <ProjectPage /> },
      { path: "skill", element: <SkillPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
