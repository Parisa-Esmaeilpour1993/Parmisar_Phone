import { FaCircle } from 'react-icons/fa';
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';

export default function Analysis() {
  return (
    <div className="bg-white h-[8rem] w-[91%] ml-16 mt-4 rounded-2xl shadow-md flex">
      <div className=" flex flex-col gap-2 justify-center justify-center items-center w-[27%] pr-8 border-r-2">
        <div className="flex gap-3 items-center">
          <FaCircle className="text-orange-500 " />
          <p>Total Revenue</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">$ 216k</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-semibold">$341</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[28%] pr-8 border-r-2">
        <div className="flex gap-3 items-center">
          <FaCircle className="text-green-500" />
          <p>Total Revenue</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">2,221</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs  text-green-700 font-semibold">121</p>
            <GoArrowUpRight className="text-xs mt-[2px]  text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[28%] pr-8 border-r-2">
        <div className="flex gap-3 items-center">
          <FaCircle className="text-blue-500" />
          <p>Total Revenue</p>
        </div>
        <div className="flex gap-5 items-center ml-20">
          <p className="font-semibold text-3xl">1,423</p>
          <div className=" bg-green-200 w-11 rounded-lg flex justify-center py-1">
            <p className="text-xs text-green-700 font-semibold">91</p>
            <GoArrowUpRight className="text-xs mt-[2px] text-green-700 font-bold" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-2 justify-center items-center w-[27%] pr-8 border-r-2">
        <div className="flex gap-3 items-center">
          <FaCircle className="text-pink-500" />
          <p>Total Revenue</p>
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
