import { AiFillProduct } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import logo from "./../../../assets/images/logo.png";
import { asidebarlocalization } from "../../../constants/localization/Localization";
import { useState } from "react";

interface ActiveComponentProps {
  setActiveComponent: (component: string) => void;
}
export default function Asidebar({ setActiveComponent }: ActiveComponentProps) {
  const [activeButton, setActiveButton] = useState<string>("home");

  function handleNavigation(component: string) {
    setActiveComponent(component);
    setActiveButton(component);
  }
  return (
    <div className="flex flex-col gap-32 items-center pt-16 ">
      <div className="flex gap-2 ">
        <img className="w-8 h-10 items-center" src={logo} alt="logo" />
        <p className="text-2xl font-bold">{asidebarlocalization["parmisar"]}</p>
      </div>
      <div className="flex flex-col gap-8">
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeButton === "home" ? "bg-primary-200 text-white" : ""
          }`}
          onClick={() => handleNavigation("home")}
        >
          <IoHomeSharp />
          <p>{asidebarlocalization["home"]}</p>
        </button>
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeButton === "products" ? "bg-primary-200 text-white" : ""
          }`}
          onClick={() => handleNavigation("products")}
        >
          <AiFillProduct />
          <p>{asidebarlocalization["products"]}</p>
        </button>
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-lg ${
            activeButton === "orders" ? "bg-primary-200 text-white" : ""
          }`}
          onClick={() => handleNavigation("orders")}
        >
          <BiSolidMessageDetail />
          <p>{asidebarlocalization["orders"]}</p>
        </button>
      </div>
      <button className="flex items-center gap-2">
        <CiLogout />
        <p>{asidebarlocalization["logOut"]}</p>
      </button>
    </div>
  );
}
