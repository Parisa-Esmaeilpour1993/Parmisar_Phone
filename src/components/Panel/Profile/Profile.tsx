import { profilelocalization } from '../../../constants/localization/Localization';
import Button from '../../shared/button/Button';
import Input from '../../shared/input/Input';
import prof from './../../../assets/images/information.png';

export default function Profile() {
  return (
    <div className="flex flex-col gap-6 pt-3 pr-16 pl-16 font-vazir">
      <h2 className="text-xl text-end mt-10 font-vazirbold">
        {profilelocalization['profile']}
      </h2>
      <div className="flex flex-col gap-6 pt-4 ">
        <div className="flex gap-4 items-center font-vazir justify-end">
          <Button className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95">
            {profilelocalization['uploadNew']}
          </Button>
          <Button className="bg-primary-200 w-40 h-9 mt-1 rounded-lg text-white active:scale-95">
            {profilelocalization['removeProfile']}
          </Button>
          <img
            className="w-16 h-16 rounded-full"
            src={prof}
            alt="profile photo"
          />
        </div>
        <hr />
        <form className="flex flex-col gap-4 text-right">
          <div className="flex justify-around">
            <div className="flex flex-col gap-2">
              <label htmlFor="bio">:{profilelocalization['bio']}</label>
              <textarea
                className="bg-transparent p-2 h-32 w-96 rounded-md border border-gray-400"
                placeholder="..."
                dir="rtl"
                name="bio"
                id="bio"
              ></textarea>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization['name']}
                  name="fullName"
                  type="text"
                  placeholder={profilelocalization['typeName']} value={''}                />
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization['email']}
                  name="email"
                  type="email"
                  placeholder={profilelocalization['typeEmail']} value={''}                />
              </div>
              <div className="flex gap-6">
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization['userName']}
                  name="userName"
                  type="text"
                  placeholder={profilelocalization['typeUserName']} value={''}                />
                <Input
                  className="bg-transparent border border-gray-400 rounded-md p-1"
                  label={profilelocalization['phonNumber']}
                  name="phoneNumber"
                  type="text"
                  placeholder={profilelocalization['typePhoneNumber']} value={''}                />
              </div>
            </div>
          </div>
          <Button className="bg-primary-200 w-40 h-9 font-vazir ml-[4.6rem] rounded-lg text-white active:scale-95">
            {profilelocalization['updateProfile']}
          </Button>
        </form>
      </div>
    </div>
  );
}
