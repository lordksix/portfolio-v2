import React from "react";
import { useFormContext } from "react-hook-form";

type FormTextArearops = {
  label: string,
  name: string,
  required?: boolean,
};

const FormTextArea: React.FC<FormTextArearops> = ({
  label,
  name,
  required = true,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="">
      <label htmlFor={name} className="block mb-2 text-ct-blue-600">
        {label}
      </label>
      <textarea
        id={name}
        className="block w-full px-4 py-1 text-black bg-white appearance-none rounded-2xl focus:outline-none"
        {...register(name, { required })}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && (
        <span className="block pt-1 text-xs text-red-500">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormTextArea;
