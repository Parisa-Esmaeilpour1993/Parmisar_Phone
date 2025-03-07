import { Route, Routes } from "react-router";
import { AsideProvider } from "./components/context/context";
import { routesArray } from "./constants/routes";

function App() {
  return (
    <>
      <AsideProvider>
        <Routes>
          {routesArray.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AsideProvider>
    </>
  );
}

export default App;
