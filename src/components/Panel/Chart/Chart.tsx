import { chartlocalization } from "../../../constants/localization/Localization";

export default function Chart() {
  return (
    <div className="bg-white h-[21rem] w-[66%] mt-5 rounded-3xl shadow-md">
      <div className="m-10 text-right">
        <p>{chartlocalization["monthlyRevenue"]}</p>
        <p className="pt-1 text-4xl font-medium">15,000</p>
      </div>
      <div className="flex justify-evenly">
        <div className="bg-gray-300 w-12 h-24 my-10 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-16 my-[4.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-12 my-[5.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-28 my-6 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-16 my-[4.5rem] rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 my-14 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 my-14 rounded-xl flex"></div>
        <div className="bg-gray-300 w-12 h-20 my-14 rounded-xl flex"></div>
      </div>
    </div>
  );
}
