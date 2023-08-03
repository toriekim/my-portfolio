import Image from 'next/image';

const Landing = () => {
  return (
    <>
      <div className="left-0 top-0 flex flex-col content-center">
        <Image
          src="/main-logo.png"
          alt="personal brand logo for VK"
          width={100}
          height={100}
          className="absolute z-50 m-8"
        />
        <Image
          src="/landing.jpg"
          alt="landing profile picture of Torie sitting in dramatic bushes"
          fill={true}
          className="min-w-full object-cover object-bottom"
        />
        <h1 className="absolute top-1/2 z-50 font-display text-6xl">
          Hi, I'm Torie
        </h1>
      </div>
    </>
  );
};

export default Landing;
