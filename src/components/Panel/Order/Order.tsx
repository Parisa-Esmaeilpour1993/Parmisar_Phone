import { Orderlocalization } from "../../../constants/localization/Localization";
import Table from "./table/Table";

export default function Order({ searchQuery }: { searchQuery: string }) {
  return (
    <div className="px-12 pt-4 font-vazir">
      <h1 className="my-5 text-2xl font-semibold text-right">
        {Orderlocalization.oredr}
      </h1>
      <Table searchQuery={searchQuery} />
    </div>
  );
}
