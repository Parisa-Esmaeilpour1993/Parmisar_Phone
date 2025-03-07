import Asidebar from "./Asidebar/Asidebar";
import Headers from "./Headers/Headers";
import Products from "./Products/Products";
import Home from "./Home/Home";
import { useContext } from "react";
import Order from "./Order/Order";
import Profile from "./Profile/Profile";
import AsideContext from "../context/context";

export default function Panel() {
  const asideContext = useContext(AsideContext);
  if (!asideContext) {
    throw new Error("AsideProvider is missing.");
  }

  const { activeComponent } = asideContext;

  function renderComponents() {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "order":
        return <Order />;
      case "admin":
        return <Profile />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5">
        <div className="w-[20%] shadow-xl">
          <Asidebar />
        </div>
        <div className="w-full">
          <Headers />
          {renderComponents()}
          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
}
