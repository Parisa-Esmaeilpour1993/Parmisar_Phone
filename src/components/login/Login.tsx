import { useState } from "react";
import Button from "../shared/button/Button";
import Input from "../shared/input/Input";
import { LoginAd } from "../Sevices/LoginAd/LoginAd";
import { useNavigate } from "react-router";
import { loginlocalization } from "../../constants/localization/Localization";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
    } else if (name === "password") {
      setPassword(value);
      if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!email) {
      newErrors.email = loginlocalization.emailRequired;
    } else if (!emailRegex.test(email)) {
      newErrors.email = loginlocalization.invalidEmail;
    }

    if (!password) {
      newErrors.password = loginlocalization.passwordRequired;
    } else if (!passwordRegex.test(password)) {
      newErrors.password = loginlocalization.invalidPassword;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    const result = await LoginAd({ email: email, password: password });
    console.log(result);
    if (result?.status === 200) {
      setLoading(false);
      toast.success(loginlocalization.success);
      navigate("/panel");
    } else {
      setLoading(false);
      toast.error(loginlocalization.error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-secondary-200">
      <ToastContainer />

      <div className="relative flex flex-col items-center justify-center w-1/2">
        <div className="absolute w-[12rem] h-[12rem] bg-gradient-to-r from-primary-200 to-primary-100 rounded-full -top-[24%] left-[6%]"></div>
        <div className="absolute w-[12rem] h-[12rem] bg-gradient-to-r from-primary-100 to-primary-200 rounded-full -bottom-[24%] right-[6%]"></div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="bg-secondary-100 p-10 flex flex-col gap-7 relative bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-xl rounded-lg w-3/5 z-10"
          noValidate
        >
          <label className="text-xl font-semibold text-center">
            {loginlocalization.loginPage}
          </label>
          <Input
            label={loginlocalization.email}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="rounded-md p-2  focus:outline-[2px] focus:outline-primary-200"
            placeholder={loginlocalization.typeHere}
          />
          {errors.email && (
            <span className="text-red-500 text-sm text-right -mt-4">
              {errors.email}
            </span>
          )}

          <div className="relative">
            <Input
              label={loginlocalization.password}
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handleChange}
              className="rounded-md p-2  focus:outline-[2px] focus:outline-primary-200 "
              placeholder={loginlocalization.typeHere}
              name="password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute left-3 -mt-7 text-lg text-primary-200"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm text-right -mt-4">
              {errors.password}
            </span>
          )}

          <Button
            children={loginlocalization["login"]}
            className="bg-primary-200 p-2 w-1/2 rounded-md m-auto text-white active:scale-95 hover:bg-slate-500"
            type="submit"
          />
          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
