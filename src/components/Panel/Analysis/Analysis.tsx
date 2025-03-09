import { FaCircle } from "react-icons/fa";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { Analysislocalization } from "../../../constants/localization/Localization";

export default function Analysis() {
  return (
    <div className="bg-white h-[8rem] w-full px-2 mt-4 rounded-2xl shadow-md flex items-center justify-center">
      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-6 border-r-2">
        <div className="flex gap-3 items-center mx-10">
          <FaCircle className="text-orange-500 " />
          <p>{Analysislocalization["totalRevenue"]}</p>
        </div>
        <div className="flex gap-5 items-center x-20">
          <p className="font-semibold text-3xl"> 10,000,000</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-semibold">341</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-6 border-r-2">
        <div className="flex gap-3 items-center ml-7">
          <FaCircle className="text-green-500" />
          <p>{Analysislocalization["inovices"]}</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">2,221</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs  text-green-700 font-semibold">121</p>
            <GoArrowUpRight className="text-xs mt-[2px]  text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-6 border-r-2">
        <div className="flex gap-3 items-center ml-8">
          <FaCircle className="text-blue-500" />
          <p>{Analysislocalization["clients"]}</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">1,423</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-semibold">91</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-6">
        <div className="flex gap-3 items-center ml-3">
          <FaCircle className="text-pink-500" />
          <p>{Analysislocalization["profit"]}</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">78%</p>
          <div className=" bg-red-100 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-red-600 font-semibold">1%</p>
            <GoArrowDownRight className="text-xs mt-[2px] text-red-600 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
