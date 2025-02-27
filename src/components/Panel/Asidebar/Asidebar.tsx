import { AiFillProduct } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IoMdHelpCircle } from "react-icons/io";
import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import logo from './../../../assets/images/logo.png'


export default function Asidebar() {
  return (
    <div className="flex flex-col gap-32 pt-16 px-10 ">
      <div className="flex gap-2 ">
        <img className="w-8 h-10 items-center" src={logo} alt="logo" />
        <p className="text-2xl font-bold">Parmisar</p>
      </div>
      <div className="flex flex-col gap-8">
        <button className="flex items-center gap-2 focus:bg-primary-200 focus:p-1 focus:rounded-lg focus:text-white">
          <IoHomeSharp />
          <p>Home</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-primary-200 focus:p-1 focus:rounded-lg focus:text-white">
          <AiFillProduct />
          <p>Products</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-primary-200 focus:p-1 focus:rounded-lg focus:text-white">
          <BiSolidMessageDetail />
          <p>Message</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-primary-200 focus:p-1 focus:rounded-lg focus:text-white">
          <IoSettingsSharp />
          <p>Settings</p>
        </button>
        <button className="flex items-center gap-2 focus:bg-primary-200 focus:p-1 focus:rounded-lg focus:text-white">
          <IoMdHelpCircle />
          <p>Help</p>
        </button>
      </div>
      <button className="flex items-center gap-2">
        <CiLogout />
        <p>Log Out</p>
      </button>
    </div>
  );
}
