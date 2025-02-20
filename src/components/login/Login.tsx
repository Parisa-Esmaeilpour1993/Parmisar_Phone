import Input from "../shared/input/Input";

export default function Login() {
  return (
    <div>
      <Input label="email address" type="email" value={""} />
    </div>
  );
}
