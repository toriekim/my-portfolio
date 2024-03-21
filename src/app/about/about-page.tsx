import Image from 'next/image';
import { userData } from '@/constants/userData';

const AboutPage = () => {
  return (
    <div className="inline-flex flex-col items-center justify-center bg-magentaPink px-8 pb-[120px] pt-[180px] dark:bg-chartreuse sm:px-[15vw] lg:px-[20vw]">
      <div className="inline-flex flex-col items-center justify-center gap-[70px] md:flex-row">
        <div className="inline-flex flex-col items-start justify-start gap-5 pb-2">
          <div className="relative h-[195px] w-[195px]">
            <Image
              width={195}
              height={195}
              className="h-[195px] w-[195px] object-cover"
              src="/images/about-photo.jpg"
              alt="profile photo of torie looking up with a smile"
              fetchPriority="high"
            />
            <div className="absolute left-0 top-0 h-[195px] w-[195px] border border-darkEmerald" />
          </div>
          <div className="flex w-full flex-col gap-1 ">
            <h4 className="border-b-[1.5px] border-chartreuse border-opacity-75 font-display text-[1.375rem] font-bold text-chartreuse dark:border-magentaPink dark:text-magentaPink">
              Victoria Kim
            </h4>
            <p className="text-base font-normal leading-tight text-yellowParchment dark:text-darkEmerald">
              Software Engineer <br /> Graphic Designer
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-1">
            <h4 className="font-display text-[1.375rem] text-xl font-bold text-chartreuse dark:text-magentaPink">
              Bio:
            </h4>
            <div className="flex flex-col gap-4">
              {userData.about.bio.map((p, idx) => (
                <p
                  key={`about-bio-p-${idx}`}
                  className="text-base font-normal leading-relaxed text-yellowParchment dark:text-darkEmerald"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-1">
            <h4 className="font-display text-[1.375rem] text-xl font-bold text-chartreuse dark:text-magentaPink">
              Hobbies:
            </h4>
            <p className="text-base font-normal leading-relaxed text-yellowParchment dark:text-darkEmerald">
              {userData.about.hobbies}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
