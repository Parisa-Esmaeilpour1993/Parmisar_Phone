import Analysis from "../Analysis/Analysis";
import Chart from "../Chart/Chart";
import Information from "../Information/Information";

export default function Home() {
  return (
    <div className="px-12 pt-5">
      <Analysis />
      <div className="flex items-center justify-between">
        <Information />
        <Chart />
      </div>
    </div>
  );
}
