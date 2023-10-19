import landingPhoto from '../../public/landing.jpg';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="relative flex h-[150vh] flex-col items-center justify-between">
      <Image
        src={landingPhoto}
        alt="landing profile picture of Torie sitting in dramatic bushes"
        fill
        quality={100}
        className={'max-w-md max-h-[60%] object-cover ml-auto mt-[20%] mb-auto'}
        priority
        unoptimized
      />
      <h1 className="font-display absolute top-[8%] text-[150px] text-white text-center">
        Hi, I&apos;m Torie
      </h1>
    </div>
  );
};

export default HomePage;
