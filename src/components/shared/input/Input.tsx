interface InputProps {
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  onChange?: () => void;
}

export default function Input({
  label,
  type,
  value,
  placeholder,
  className,
  onChange,
}: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </div>
  );
}
