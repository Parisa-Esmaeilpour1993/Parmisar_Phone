import { chartlocalization } from "../../../constants/localization/Localization";

export default function Chart() {
  return (
    <div className="bg-white h-[21rem] w-[60%] ml-16 mt-5 rounded-3xl shadow-md">
      <div className="m-10">
        <p>{chartlocalization["monthlyRevenue"]}</p>
        <p className="pt-1 text-4xl font-medium">15,000</p>
      </div>
      <div className="flex">
        <div className="bg-gray-300 w-12 h-24 ml-9  my-10 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-16 ml-11 my-[4.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-12 ml-11 my-[5.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-28 ml-11 my-6 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-16 ml-11 my-[4.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 ml-11 my-14 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 ml-11 my-14 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 ml-11 my-14 rounded-xl flex"></div>
      </div>
    </div>
  );
}

