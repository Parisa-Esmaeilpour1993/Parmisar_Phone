import { informationlocalization } from "../../../constants/localization/Localization";


export default function Information() {
  return (
    <div className="information-bg h-[21rem] w-[29%] ml-5 mt-5 rounded-3xl p-9 shadow-md">
      <p className="bg-white rounded-xl w-11 text-xs px-2 py-1 text-blue-300 ">
        {informationlocalization["new"]}
      </p>
      <p className="text-white text-2xl font-semibold pt-3">
        {informationlocalization["invoicingTemplates"]}
      </p>
      <p className="text-white pt-3">
        {informationlocalization["newTemplatesFocusedOn"]}
        <br /> {informationlocalization["helpingYou"]}
        <br /> {informationlocalization["ImproveYour"]}
      </p>
      <button className="bg-white w-[100%] py-3 mt-7 rounded-2xl">{informationlocalization["downloadNow"]}</button>
    </div>
  );
}
