import { ReactNode } from "react";
import HomePage from "../../pages/home/home";

import LoginPage from "../../pages/login/login";
import { ROUTES } from "./Routes";
import PanelPage from "../../pages/panel/panel";

interface routesProps {
  path: string;
  element: ReactNode;
}

export const routesArray: routesProps[] = [
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: ROUTES.login,
    element: <LoginPage />,
  },
  {
    path: ROUTES.panel,
    element: <PanelPage />,
  },
];
