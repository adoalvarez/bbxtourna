import { useForm, type FieldValues, type SubmitHandler, FormProvider } from "react-hook-form";

type ButtonDataProps = {
  label: string,
  className?: string,
  action?: () => void;
  type?: 'submit' | 'button' 
}

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<T>;
  buttons?: ButtonDataProps[];
}

const Form = <T extends FieldValues>({ children, onSubmit, buttons }: FormProps<T>) => {
  const methods = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col">
        <div className="w-full">
          {children}
        </div>
        { buttons &&
          <>
            <div className="divider" />
            <div className="w-full flex flex-row gap-4">
              {buttons.map((data, index) => (
                <button key={`form_button_${index}`} type={data.type ?? 'button'} className={`btn btn-block flex-auto ${data.className}`} onClick={data.action}>
                  {data.label}
                </button>
              ))}
            </div>
          </>
        }
      </form>
    </FormProvider>
  )
}

export default Form;