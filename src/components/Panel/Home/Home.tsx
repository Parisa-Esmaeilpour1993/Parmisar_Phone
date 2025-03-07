import Analysis from "../Analysis/Analysis";
import Chart from "../Chart/Chart";
import Information from "../Information/Information";

export default function Home() {
  return (
    <div>
      <Analysis />
      <div className="flex">
        <Chart />
        <Information />
      </div>
    </div>
  );
}
