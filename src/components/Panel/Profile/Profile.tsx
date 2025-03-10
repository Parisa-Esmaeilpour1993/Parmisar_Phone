import { profilelocalization } from "../../../constants/localization/Localization";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import prof from "./../../../assets/images/information.png";

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 pt-4 px-16">
      <h2 className="text-xl font-semibold text-right">
        {profilelocalization["profile"]}
      </h2>
      <div className="flex gap-4 items-center ml-1 justify-end">
        <Button
          className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95"
          children={profilelocalization["uploadNew"]}
        />
        <Button
          className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95"
          children={profilelocalization["removeProfile"]}
        />
        <img
          className="w-16 h-16 rounded-full"
          src={prof}
          alt="profile photo"
        />
      </div>
      <hr />
      <form className="flex flex-col gap-4 justify-between text-right">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="bio">{profilelocalization["bio"]}:</label>
            <textarea
              className="bg-transparent p-2 h-52 w-96 rounded-md border border-gray-400"
              placeholder="..."
              dir="rtl"
              name="bio"
              id="bio"
            ></textarea>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6">
              <div>
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization["name"]}
                  name="fullName"
                  type="text"
                  value={""}
                  placeholder={profilelocalization["typeName"]}
                />
              </div>
              <div>
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization["email"]}
                  name="email"
                  type="email"
                  value={""}
                  placeholder={profilelocalization["typeEmail"]}
                />
              </div>
            </div>
            <div className="flex gap-6 ">
              <div>
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization["userName"]}
                  name="fullName"
                  type="text"
                  value={""}
                  placeholder={profilelocalization["typeUserName"]}
                />
              </div>
              <div>
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization["phonNumber"]}
                  name="email"
                  type="email"
                  value={""}
                  placeholder={profilelocalization["typePhoneNumber"]}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          className="bg-primary-200 px-2 h-9 rounded-lg text-white active:scale-95 hover:bg-gray-500"
          children={profilelocalization["updateProfile"]}
        />
      </form>
    </div>
  );
}
