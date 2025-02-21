import { ReactNode } from "react";
import HomePage from "../../pages/home/Home";

import LoginPage from "../../pages/login/Login";
import { ROUTES } from "./Routes";

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
];
