import Asidebar from "./Asidebar/Asidebar";
import Headers from "./Headers/Headers";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";
import { useEffect, useState } from "react";
import axios from "axios";
import { Iproduct } from "../../interfaces/interfaces";
import Home from "./Home/Home";
import { useContext } from "react";
import Order from "./Order/Order";
import AsideContext from "../context/context";
import { InitialFocus } from "./Modal/modal";

export default function Panel() {
  const [products, setProducts] = useState<Iproduct[]>([]);

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
        return <Products formData={products} />;
      case "order":
        return <Order />;
      case "admin":
        return <Profile />;
    }
  }

  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5">
        <div className="w-full">
          <Headers />
          {renderComponents()}
        </div>
        <div className="w-[20%] shadow-xl">
          <Asidebar />
        </div>
      </div>
    </div>
  );
}
