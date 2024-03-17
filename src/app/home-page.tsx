import Button from '@/components/Button';
import '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className="mt-[80px] p-[100px]">
      <div className="inline-flex flex-col items-center justify-start gap-10 md:flex-row">
        {/* left-side content */}
        <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-8 self-stretch md:items-end">
          {/* hero text */}
          <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start md:text-left">
            <h1 className="self-stretch py-[25px] font-display text-[5rem] font-normal leading-[5.5rem] tracking-[0.125rem] text-darkGreen dark:text-orangeParchment md:order-1">
              Victoria Kim
            </h1>
            <h3 className="order-first self-stretch font-display text-[1.75rem] font-bold leading-[30px] tracking-[0.015625rem] text-magentaPink dark:text-chartreuse md:order-2">
              Software Engineer
            </h3>
            <p className="self-stretch leading-relaxed tracking-wide md:order-3">
              Hi, most call me Torie! I thrive in the intersection between
              artistic creativity and technical solutions, translating ideas
              into robust applications. Based in Boston, MA.
            </p>
          </div>
          {/* about button */}
          <Button
            containerClass="md:w-[166px] md:items-end"
            buttonClass="md:w-[166px] text-[15px] text-yellowParchment dark:text-darkEmerald bg-magentaPink px-[35px] py-3 dark:bg-chartreuse"
            buttonText="About me"
          />
        </div>

        {/* hero image */}
        <picture className="inline-flex shrink grow basis-0 self-stretch">
          <img
            id="landingImage"
            src="/landing-photo.jpg"
            alt="landing profile picture of Torie sitting in dramatic bushes"
            className="object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomePage;
