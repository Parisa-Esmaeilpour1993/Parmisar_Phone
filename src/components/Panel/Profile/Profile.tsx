import { profilelocalization } from "../../../constants/localization/Localization";
import Button from "../../shared/button/Button";
import Input from "../../shared/input/Input";
import prof from "./../../../assets/images/information.png"

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 pt-5 pr-16 pl-10">
      <h2 className="text-xl font-semibold">
        {profilelocalization['profile']}
      </h2>
      <div className="flex gap-10 items-center mb-2">
        <img
          className="w-16 h-16 rounded-full"
          src={prof}
          alt="profile photo"
        />
        <Button
          className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95"
          children={profilelocalization['uploadNew']}
        />
        <Button
          className="bg-primary-100 w-40 h-9 mt-1 rounded-lg text-white active:scale-95"
          children={profilelocalization['removeProfile']}
        />
      </div>
      <hr className="" />
      <form action="" className="flex flex-col gap-7 justify-start items-start">
        <div className="flex gap-10 ">
          <div>
            <Input
              className="bg-transparent border border-gray-400 rounded-md p-2 w-[35rem]"
              label={profilelocalization['name']}
              name="fullName"
              type="text"
              value={''}
              placeholder={profilelocalization['typeName']}
            />
          </div>
          <div>
            <Input
              className="bg-transparent border border-gray-400 rounded-md p-2 w-[35rem]"
              label={profilelocalization['email']}
              name="email"
              type="email"
              value={''}
              placeholder={profilelocalization['typeEmail']}
            />
          </div>
        </div>
        <div className="flex gap-10 ">
          <div>
            <Input
              className="bg-transparent border border-gray-400 rounded-md p-2 w-[35rem]"
              label={profilelocalization['userName']}
              name="fullName"
              type="text"
              value={''}
              placeholder={profilelocalization['typeUserName']}
            />
          </div>
          <div>
            <Input
              className="bg-transparent border border-gray-400 rounded-md p-2 w-[35rem]"
              label={profilelocalization['phonNumber']}
              name="email"
              type="email"
              value={''}
              placeholder={profilelocalization['typePhoneNumber']}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bio">{profilelocalization['bio']}:</label>
          <textarea
            className="bg-transparent p-2 h-52 w-[72.2rem] rounded-md border border-gray-400 "
            placeholder="..."
            name="bio"
            id="bio"
          ></textarea>
        </div>
        <Button
          className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95"
          children={profilelocalization['updateProfile']}
        />
      </form>
    </div>
  );
}
