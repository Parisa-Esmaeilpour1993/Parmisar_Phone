interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  value,
  name,
  placeholder,
  className,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label dir="rtl">{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        dir="rtl"
      />
    </div>
  );
}
