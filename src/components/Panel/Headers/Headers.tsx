import { FaBell } from "react-icons/fa";
import profile from "./../../../assets/images/profile.svg";
import {
  asidebarlocalization,
  Headerlocalization,
} from "../../../constants/localization/Localization";
import { useContext, useState } from "react";
import AsideContext from "../../context/context";
import { IoSearchSharp } from "react-icons/io5";

export default function Headers({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const asideContext = useContext(AsideContext);
  if (!asideContext) {
    throw new Error("AsideProvider is missing.");
  }

  const { activeComponent, setActiveComponent } = asideContext;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (e.target.value === "") {
      onSearch("");
    }
  };

  return (
    <div className="mt-5 flex items-center justify-between px-16">
      <div
        className="flex gap-7 items-center cursor-pointer"
        onClick={() => setActiveComponent("admin")}
      >
        <FaBell className="text-2xl animate-bounce" />

        <div className="flex gap-3">
          <img className="w-12 h-12" src={profile} alt="profile" />
          <div>
            <p> {asidebarlocalization["parmisar"]} </p>
            <p className="text-gray-400">{Headerlocalization["admin"]} </p>
          </div>
        </div>
      </div>
      {activeComponent !== "home" && (
        <div className="flex items-center border focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
          <input
            type="text"
            placeholder={Headerlocalization["palaceHolder"]}
            className="w-[30rem] bg-transparent h-full pl-4 outline-none placeholder-gray-500 text-sm"
            value={searchValue}
            onChange={handleInputChange}
          />
          <IoSearchSharp onClick={handleSearchClick} />
        </div>
      )}
    </div>
  );
}
