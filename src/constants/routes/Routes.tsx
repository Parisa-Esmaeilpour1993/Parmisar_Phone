import { ReactNode } from "react";
import HomePage from "../../pages/home/Home";
import { ROUTES } from "./Routes";
import React from "react";

interface routesProps {
  path: string;
  element: ReactNode;
}

export const routesArray: routesProps[] = [
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
];
