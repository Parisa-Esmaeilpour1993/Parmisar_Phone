import { useState } from 'react';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';
import { LoginAd } from '../Sevices/LoginAd/LoginAd';
import { useNavigate } from 'react-router';
import { loginlocalization } from '../../constants/localization/Localization';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';

export default function Login() {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading,setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true)
    const result = await LoginAd({ email: email, password: password });
    console.log(result);
    if(result?.status===200){
      setLoading(false);
       navigate('/panel')
    }else{
      setLoading(false);
      toast.error("ورود به حساب کاربری موفقیت امیز نبود")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-secondary-200">
      <ToastContainer/>
      <div className="absolute w-28 h-28 md:w-48 md:h-48 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full top-[15%] left-[8%] md:top-[90px] md:left-[479px]"></div>
      <div className="absolute w-28 h-28 md:w-48 md:h-48 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full bottom-[15%] right-[8%] md:bottom-[71px] md:right-[495px]"></div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-secondary-100 p-10 flex flex-col gap-7 relative bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-xl md:p-12 rounded-lg w-full max-w-xs sm:max-w-sm  z-10"
      >
        <Input
          label={loginlocalization["email"]}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="rounded-md p-2  focus:outline-[2px] focus:outline-primary-200 "
          placeholder="email"
        />
        <Input
          label={loginlocalization["password"]}
          type="password"
          value={password}
          onChange={handleChange}
          className="rounded-md p-2  focus:outline-[2px] focus:outline-primary-200 "
          placeholder="password"
          name="password"
        />
        <Button
          children={loginlocalization["login"]}
          className="bg-primary-200 p-2 w-1/2 rounded-md m-auto text-white active:scale-95"
          type="submit"
        />
        {loading && (<Loading/>)}
      </form>
    </div>
  );
}
