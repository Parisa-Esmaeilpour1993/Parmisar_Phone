import { FaCircle } from "react-icons/fa";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { Analysislocalization } from "../../../constants/localization/Localization";

export default function Analysis() {
  return (
    <div className="bg-white h-[8rem] w-full px-2 mt-4 rounded-2xl shadow-md flex items-center justify-center">
      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-8 border-r-2">
        <div className="flex gap-3 items-center ml-28 font-vazirbold">
          <p>{Analysislocalization['totalRevenue']}</p>
          <FaCircle className="text-orange-500 " />
        </div>
        <div className="flex gap-4 items-center ">
          <p className="text-3xl font-number"> 10,000,000</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-number">341</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-8 border-r-2">
        <div className="flex gap-3 items-center ml-32 font-vazirbold">
          <p>{Analysislocalization['inovices']}</p>
          <FaCircle className="text-green-500" />
        </div>
        <div className="flex gap-4 items-center ml-20">
          <p className="font-number text-3xl">2,221</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs  text-green-700 font-number">121</p>
            <GoArrowUpRight className="text-xs mt-[2px]  text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-8 border-r-2">
        <div className="flex gap-2 items-center ml-32 font-vazirbold">
          <p>{Analysislocalization['clients']}</p>
          <FaCircle className="text-blue-500" />
        </div>
        <div className="flex gap-4 items-center ml-20">
          <p className="text-3xl font-number">1,423</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-number">91</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[23%] pr-6">
        <div className="flex gap-3 items-center ml-32 font-vazirbold">
          <p>{Analysislocalization['profit']}</p>
          <FaCircle className="text-pink-500" />
        </div>
        <div className="flex gap-4 items-center ml-16">
          <p className="font-number text-3xl">78%</p>
          <div className=" bg-red-100 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-red-600 font-number">1%</p>
            <GoArrowDownRight className="text-xs mt-[2px] text-red-600 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}
