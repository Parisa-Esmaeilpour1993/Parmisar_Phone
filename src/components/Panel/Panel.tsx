import Asidebar from "./Asidebar/Asidebar";
import Headers from "./Headers/Headers";
import Products from "./Products/Products";
import Home from "./Home/Home";
import { useState } from "react";

export default function Panel() {
  const [activeComponent, setActiveComponent] = useState("home");

  function renderComponents() {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "products":
        return <Products />;
      case "messages":
        return <Orders />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5">
        <div className="w-[20%] shadow-xl">
          <Asidebar setActiveComponent={setActiveComponent} />
        </div>
        <div className="w-full">
          <Headers />
          {renderComponents()}
        </div>
      </div>
    </div>
  );
}
