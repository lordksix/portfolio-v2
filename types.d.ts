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
  confirmation: string,
}

type projectData = {
  id?: string,
  nameEN: string,
  nameES: string,
  starred: boolean,
  shown: boolean,
  language: string,
  framework: string,
  descriptionEN: string,
  descriptionES: string,
  url: string[],
  snapshot: string,
  techtag: string[],
}

