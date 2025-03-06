import { Orderlocalization } from "../../../constants/localization/Localization";
import Table from "./table/Table";


export default function Order() {
  return (
    <div className="px-8">
      <h1 className="my-5 text-[20px] font-semibold">
        {Orderlocalization.oredr}
      </h1>
      <Table />
    </div>
  );
}
