import { useState } from 'react';
import Button from '../shared/button/Button';
import Input from '../shared/input/Input';
import { LoginAd } from '../Sevices/LoginAd/LoginAd';
import { useNavigate } from 'react-router';

export default function Login() {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

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
    const result = await LoginAd({ email: email, password: password });
    console.log(result);
    if(result?.status===200){
       navigate('/panel')

    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-primary-100 p-10 flex flex-col gap-5 "
      >
        <Input
          label="Email address"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="rounded-md p-1  focus:outline-[2px] focus:outline-primary-200 "
          placeholder="email"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={handleChange}
          className="rounded-md p-1  focus:outline-[2px] focus:outline-primary-200 "
          placeholder="password"
          name="password"
        />
        <Button
          children="Login"
          className="bg-primary-200 p-2 w-1/2 rounded-md m-auto text-white"
          type="submit"
        />
      </form>
    </div>
  );
}
