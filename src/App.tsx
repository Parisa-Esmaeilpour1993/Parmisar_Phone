import { Route, Routes } from "react-router";
import { routesArray } from "./constants/routes";

function App() {
  return (
    <>
      <Routes>
        {routesArray.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
