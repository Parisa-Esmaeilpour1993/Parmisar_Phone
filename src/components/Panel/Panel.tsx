import Asidebar from "./Asidebar/Asidebar";
import Headers from "./Headers/Headers";
import Products from "./Products/Products";
import Profile from "./Profile/Profile";
import { useState } from "react";
import { Iproduct } from "../../interfaces/interfaces";
import Home from "./Home/Home";
import { useContext } from "react";
import Order from "./Order/Order";
import AsideContext from "../context/context";

export default function Panel() {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
        return <Products formData={products} searchQuery={searchQuery} />;
      case "order":
        return <Order searchQuery={searchQuery} />;
      case "admin":
        return <Profile />;
    }
  }

  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5 w-full">
        <div className="w-[80%]">
          <Headers onSearch={setSearchQuery} />
          {renderComponents()}
        </div>
        <div className="w-[20%] shadow-xl">
          <Asidebar />
        </div>
      </div>
    </div>
  );
}
