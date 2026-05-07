
interface InputProps {
  label?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  wrapperClassName?: string;
  className?: string
}

const Input = ({ 
  label,
  name,
  type = "text",
  value,
  placeholder,
  disabled = false,
  error,
  onChange,
  wrapperClassName = "",
  className = ""
} : InputProps) => {
  return (
    <div className={`flex flex-col ${wrapperClassName}`}>
      {label && <label htmlFor="">{label}</label>}
      <input 
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`
          px-3 py-2 border rounded-md outline-none transition bg-white
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
          focus:ring-2
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${className}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export default Input;