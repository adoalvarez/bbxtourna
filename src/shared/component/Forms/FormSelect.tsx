import { useFormContext } from "react-hook-form";

export interface SelectOption {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  wrapperClassName?: string;
  className?: string;
  isRequired?: boolean;
  hints?: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormSelect = ({
  id,
  label,
  options,
  wrapperClassName,
  className,
  isRequired = false,
  hints,
  placeholder = "Select an option",
  disabled = false,
}: FormSelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[id];

  return (
    <div className={`fieldset ${wrapperClassName ?? ""}`}>
      <label className="fieldset-legend block" htmlFor={id}>
        {label}
        {isRequired && <span className="text-error ml-1">*</span>}
      </label>

      <select
        id={id}
        disabled={disabled}
        defaultValue={''}
        className={`select select-bordered w-full ${
          error ? "select-error" : ""
        } ${className ?? ""}`}
        {...register(id, {
          required: isRequired
            ? `${label} is required`
            : false,
        })}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="label text-error">
          {String(error.message)}
        </p>
      ) : (
        hints && <p className="label">{hints}</p>
      )}
    </div>
  );
};

export default FormSelect;