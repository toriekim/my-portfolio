import Button from '@/components/Button';
import Link from 'next/link';
import { userData } from '@/constants/userData';

const Landing = () => {
  return (
    <div className="inline-flex flex-col items-center justify-start gap-10 py-12 md:flex-row md:py-20 lg:py-28">
      {/* left-side content */}
      <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-8 self-stretch md:items-end">
        {/* hero text */}
        <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start md:text-left">
          <h1 className="self-stretch py-[25px] font-display text-[5rem] font-normal leading-[5.5rem] tracking-[0.125rem] text-darkGreen dark:text-orangeParchment md:order-1">
            {userData.name}
          </h1>
          <h3 className="order-first self-stretch font-display text-[1.75rem] font-bold leading-[30px] tracking-[0.015625rem] text-magentaPink dark:text-chartreuse md:order-2">
            {userData.designation}
          </h3>
          <p className="self-stretch leading-relaxed tracking-wide md:order-3">
            {userData.about.description}
          </p>
        </div>
        {/* about button */}
        <Link href="/about">
          <Button
            containerClass="md:w-44 sm:items-center md:items-end"
            buttonClass="md:w-44 text-[15px] text-yellowParchment dark:text-darkEmerald bg-magentaPink px-[35px] py-3 dark:bg-chartreuse"
            buttonText="About me"
          />
        </Link>
      </div>
      {/* hero image */}
      <picture className="inline-flex shrink grow basis-0 self-stretch">
        <img
          id="landingImage"
          src="/images/landing-photo.jpg"
          alt="landing profile picture of Torie sitting in dramatic bushes"
          className="object-cover"
        />
      </picture>
    </div>
  );
};

export default Landing;
