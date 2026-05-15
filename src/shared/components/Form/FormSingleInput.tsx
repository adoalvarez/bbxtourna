
type LabelPropsType = {
  label: string;
  className: string;
}

interface FormInputProps {
  labelProps: LabelPropsType;
  id: string;
  name: string;
}

const FormSingleInput = ({
  labelProps,
  id,
  name,

}: FormInputProps) => {
  return (
    <div className={`${labelProps.className } `}>
      <label>{labelProps.label}</label>
      <input 
        id={id}
        name={name}
        type='text'
      />
    </div>
  )
}

export default FormSingleInput;