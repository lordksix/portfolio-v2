'use client';

import { useForm, FormProvider } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import { useForm as useFormspree } from "@formspree/react";
import FormTextArea from "./FormTextArea";

export default function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  resetLabel,
  submitLabel,
  confirmation, }: ContactFormLabel) {
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
      return <p className="text-lg">{confirmation}</p>;
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 mx-auto space-y-5 overflow-hidden text-white shadow-lg shadow-black/60 dark:shadow-white/30 bg-sky-700 rounded-2xl"
      >
        <FormInput label={nameLabel} name="name" required={true} />
        <FormInput label={emailLabel} name="email" type="email" required={true} />
        <FormTextArea label={messageLabel} name="message" required={true} />
        <div className="flex flex-col gap-y-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
          <button
            type="submit"
            className="flex justify-center w-full py-2 font-semibold bg-white border-none rounded-lg outline-none hover:bg-green-300 active:scale-90 text-sky-700"
          >
            {submitLabel}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="flex justify-center w-full py-2 font-semibold bg-white border-none rounded-lg outline-none hover:bg-red-300 active:scale-90 text-sky-700"
          >
            {resetLabel}
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
