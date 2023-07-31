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

type projectData = {
  nameEN: string,
  nameES: string,
  stared: boolean,
  descriptionEN: string,
  descriptionES: string,
  url: string,
  repo: string,
  snapshot: string,
  techtag: string[],
}

