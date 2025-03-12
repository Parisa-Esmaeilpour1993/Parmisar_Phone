import { AiFillProduct } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IoHomeSharp} from 'react-icons/io5';
import { RiStockFill } from 'react-icons/ri';
import logo from "./../../../assets/images/logo.png";
import { asidebarlocalization } from "../../../constants/localization/Localization";
import { useNavigate } from "react-router";
import { useContext } from "react";
import AsideContext from "../../context/context";
import { FaUsers } from "react-icons/fa";

export default function Asidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const asideContext = useContext(AsideContext);
  if (!asideContext) {
    throw new Error("AsideProvider is missing.");
  }

  const { activeComponent, setActiveComponent } = asideContext;

  return (
    <div className="flex flex-col gap-32 items-center pt-16 ">
      <div className="flex justify-end gap-2">
        <img className="w-8 h-10 items-center" src={logo} alt="logo" />
        <p className="text-2xl font-bold font-vazirbold">
          {asidebarlocalization['parmisar']}
        </p>
      </div>
      <div className="flex flex-col gap-8 font-vazir">
        <button
          className={`flex items-center justify-end gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'home' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('home')}
        >
          <p>{asidebarlocalization['home']}</p>
          <IoHomeSharp />
        </button>
        <button
          className={`flex items-center justify-end gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'products' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('products')}
        >
          <p>{asidebarlocalization['products']}</p>
          <AiFillProduct />
        </button>
        <button
          className={`flex items-center justify-end gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'order' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('order')}
        >
          <p>{asidebarlocalization['orders']}</p>
          <BiSolidMessageDetail />
        </button>
        <button
          className={`flex items-center justify-end gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'users' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('users')}
        >
          <p>{asidebarlocalization['users']}</p>
          <FaUsers />
        </button>
        <button
          className={`flex items-center justify-end gap-2 px-2 py-1 rounded-lg ${
            activeComponent === 'stock' ? 'bg-primary-200 text-white' : ''
          }`}
          onClick={() => setActiveComponent('stock')}
        >
          <p>{asidebarlocalization['stock']}</p>
          <RiStockFill />
        </button>
      </div>
      <button
        className="flex items-center gap-2 font-vazir justify-end"
        onClick={handleLogout}
      >
        <p>{asidebarlocalization['logOut']}</p>
        <CiLogout />
      </button>
    </div>
  );
}
