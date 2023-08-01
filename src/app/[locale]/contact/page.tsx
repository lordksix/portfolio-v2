import ContactForm from '@/components/forms/ContactForm';
import Footer from '@/components/home/footer/footer';
import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

export async function generateMetadata({params: { locale }}: {params: { locale: string }}) {
  const t = await getTranslator(locale, 'MetadataContact');
  if(!t) {
    return {
      title: 'Contact',
      description:
        'Information about lordksix.'
    };
  }
  return {
    title: t('title'),
    description: t('description'),
  };
}

const AboutPage = () => {
  const t = useTranslations('Contact');

  const items: ContactFormLabel = {
    nameLabel: t('name'),
    emailLabel: t('email'),
    messageLabel: t('message'),
    resetLabel: t('reset'),
    submitLabel: t('submit'),
    confirmation: t('confirmed')
  };
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen pt-24 pb-10 overflow-hidden sm:pt-16">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
        <h1 className="z-10 text-3xl text-transparent duration-1000 cursor-default bg-sky-700 dark:bg-white text-edge-outline animate-title font-display dark:text-edge-outline-dark sm:text-4xl md:text-5xl whitespace-nowrap bg-clip-text ">
          {t('title')}
        </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
      <div className="flex flex-col w-8/12 mx-auto my-8 md:w-11/12 lg:w-10/12 xl:w-8/12 gap-y-8 animate-fade-in md:grid md:grid-cols-2 md:gap-x-14 md:gap-y-0">
        <div className="flex flex-col justify-center text-center sm:text-start sm:text-xl sm:font-medium">
          <p>{t('description')}</p>
        </div>
        <div>
            <ContactForm
              nameLabel={items.nameLabel} emailLabel={items.emailLabel} messageLabel={items.messageLabel}
              resetLabel={items.resetLabel} submitLabel={items.submitLabel} confirmation={items.confirmation}
            />
        </div>
      </div>
      <Footer />
    </main>
  )
};

export default AboutPage;
