import type { HTMLInputTypeAttribute } from "react";
import { useForm, useFormContext } from "react-hook-form";

interface FormSingleInputProps {
  label: string;
  id: string;
  wrapperClassName?: string;
  className?: string;
  isRequired?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hints?: string;
}

const FormInput = ({
  label,
  id,
  wrapperClassName,
  className,
  isRequired = false,
  placeholder,
  type = 'text',
  hints
}: FormSingleInputProps) => {
  const { register } = useFormContext();

  return (
    <div className={`fieldset ${wrapperClassName}`}>
      <label className="fieldset-legend block" htmlFor={id}>
        {label}
        {isRequired && <span className="text-error ml-1">*</span>}
      </label>
      <input id={id} type={type} className={`input ${className}`} placeholder={placeholder} {...register(id, {required: isRequired})} />
      <p className="label">{hints}</p>
    </div>
  )
}

export default FormInput;