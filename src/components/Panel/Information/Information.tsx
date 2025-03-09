import { informationlocalization } from "../../../constants/localization/Localization";

export default function Information() {
  return (
    <div className="information-bg h-[21rem] w-[30%] mt-5 rounded-3xl p-9 shadow-md text-right">
      <p className="bg-white rounded-xl w-16 h-9 px-2 py-1 text-blue-400 text-center animate-pulse">
        {informationlocalization["new"]}
      </p>
      <p className="text-white text-2xl font-semibold pt-3">
        {informationlocalization["invoicingTemplates"]}
      </p>
      <p className="text-white pt-3">
        {informationlocalization["newTemplatesFocusedOn"]}{" "}
        {informationlocalization["helpingYou"]}{" "}
        {informationlocalization["ImproveYour"]}
      </p>
      <button className="bg-white w-[100%] py-3 mt-7 rounded-2xl active:scale-95 hover:scale-95">
        {informationlocalization["downloadNow"]}
      </button>
    </div>
  );
}
