import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-24 py-16 md:flex-row md:gap-48">
      <div className="flex w-full grow flex-col items-start justify-start gap-[60px]">
        {/* left-side text */}
        <div className="flex flex-col items-start justify-start gap-10">
          <h3 className="font-display text-[32px] font-bold leading-[42px] text-magentaPink dark:text-chartreuse">
            Let’s work together!
          </h3>
          <p className="text-[17px] font-normal leading-[27px]">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
        </div>
        {/* <div className="relative h-9">
            <div className="absolute left-[147px] top-0 inline-flex h-9 w-9 flex-col items-start justify-start" />
            <div className="absolute left-[196px] top-0 inline-flex h-9 w-9 flex-col items-start justify-start" />
            <div className="absolute left-[98px] top-0 inline-flex h-9 w-9 flex-col items-start justify-start" />
            <div className="absolute left-[49px] top-0 inline-flex h-9 w-9 flex-col items-start justify-start" />
            <div className="absolute left-0 top-0 inline-flex h-9 w-9 flex-col items-start justify-start" />
          </div> */}
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
