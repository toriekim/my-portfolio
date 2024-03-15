import "../styles/Home.module.css";

const HomePage = () => {
  return (
    <div className="mt-[80px] inline-flex h-[624px] flex-col items-center gap-2.5 p-[100px]">
      <div className="inline-flex items-center justify-start gap-[50px] self-stretch">
        {/* left-side content */}
        <div className="inline-flex shrink grow basis-0 flex-col items-end justify-center gap-5 self-stretch">
          <div className="flex flex-col items-start justify-center gap-2.5 self-stretch">
            <h1 className="self-stretch py-[25px] font-display text-[80px] font-normal leading-[100px] tracking-[3px] text-darkGreen dark:text-orangeParchment">
              Victoria Kim
            </h1>
            <h3 className="self-stretch font-display text-[27px] font-bold leading-[30px] text-primaryGreen dark:text-chartreuse">
              Software Engineer
            </h3>
            <p className="self-stretch leading-normal tracking-wide">
              Hi, most call me Torie! I have a penchant for creativity in all
              its forms and output. I translate ideas and solutions into robust
              applicaitons. Based in Boston, MA.
            </p>
          </div>
          {/* about button */}
          <div className="flex w-[166px] flex-col items-end justify-between pr-5">
            <div className="inline-flex items-center justify-end rounded-[5px] bg-magentaPink px-[35px] py-3">
              <button className="text-center text-[15px] font-medium leading-tight tracking-wide text-yellowParchment">
                About me
              </button>
            </div>
          </div>
        </div>
        {/* profile image */}
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
