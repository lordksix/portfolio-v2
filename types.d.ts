interface AccordionData {
  header: ReactNode;
  content: ReactNode;
  value: string;
  classItem: string;
  classTrigger: string;
  classContent: string;
}

type FormDataContact = {
  name: string,
  email: string,
  message: string,
}

type ContactFormLabel = {
  nameLabel: string,
  emailLabel: string,
  messageLabel: string,
  resetLabel: string,
  submitLabel: string,
}
