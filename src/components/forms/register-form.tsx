'use client';

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import { useForm as useFormspree } from "@formspree/react";
import FormTextArea from "./FormTextArea";


export default function RegisterForm() {
  const methods = useForm<FormDataContact>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const { reset } = methods;

  const [state, handleSubmit] = useFormspree(process.env.NEXT_PUBLIC_FORM as string);
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 mx-auto space-y-5 overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl"
      >
        <FormInput label="Name" name="name" required={true} />
        <FormInput label="Email" name="Email" type="email" required={true} />
        <FormTextArea label="Meesage" name="Email" required={true} />
        <div>
        <button
          type="button"
          onClick={() => reset()}
        />
        </div>
        <button
          type="submit"
          className="flex justify-center w-full py-3 font-semibold border-none rounded-lg outline-none"
        >
          Get in touch
        </button>
      </form>
    </FormProvider>
  );
}
