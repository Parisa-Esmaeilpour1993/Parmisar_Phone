import React from 'react'
import Asidebar from './Asidebar/Asidebar'
import Headers from './Headers/Headers';
import Analysis from './Analysis/Analysis';
import Chart from './Chart/Chart';
import Information from './Information/Information';
import Products from './Products/Products';

export default function Panel() {
  return (
    <div>
      <div className="bg-[#f6f6f6] h-screen flex gap-5">
        <div className="w-[20%] shadow-xl">
          <Asidebar />
        </div>
        <div className="w-full">
          <Headers />
          <Products/>
          {/* <Analysis />
          <div className="flex">
            <Chart />
            <Information/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
