import Button from "../../shared/button/Button";

export default function Information() {
  return (
    <div className="information-bg h-[21rem] w-[29%] ml-5 mt-5 rounded-3xl p-9 shadow-md">
      <p className="bg-white rounded-xl w-11 text-xs px-2 py-1 text-blue-300 ">
        NEW
      </p>
      <p className="text-white text-3xl font-semibold pt-3">
        We have added new
        <br /> invoicing templates!
      </p>
      <p className="text-white pt-3">
        New templates focused on
        <br /> helping you improve your
        <br /> business
      </p>
      <button className="bg-white w-[100%] py-3 mt-7 rounded-2xl">Download Now</button>
    </div>
  );
}
