import landingPhoto from '../../public/landing.jpg';
import Image from 'next/image';

const HomePage = () => {
  return (
    // <div className="relative flex h-[150vh] flex-col items-center justify-between">
    // <Image
    //   src={landingPhoto}
    //   alt="landing profile picture of Torie sitting in dramatic bushes"
    //   fill
    //   quality={100}
    //   className={'max-w-md max-h-[60%] object-cover ml-auto mt-[20%] mb-auto'}
    //   priority
    //   unoptimized
    // />
    // <h1 className="font-display absolute top-[8%] text-[150px] text-white text-center">
    //   Hi, I&apos;m Torie
    // </h1>
    // </div>
    // Container
    <div className="flex flex-col h-[150vh] items-center mt-[75px] gap-4">
      {/* hi */}
      <h1 className="font-display text-[150px] text-white -mb-20 z-50">
        Hi, I&apos;m Torie
      </h1>
      {/* middle-content */}
      <div className="flex flex-row h-[80vh] gap-6 items-end">
        {/* short-bio */}
        <div className="grow">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            ex commodo, eleifend est a, placerat eros. Nunc ut rhoncus mauris,
            sit amet tempor sapien. In porttitor erat ac ipsum dignissim
            tincidunt. Morbi lacinia leo massa. Duis non tortor sit amet nisi
            tincidunt ullamcorper at id neque. Nullam efficitur ipsum lorem,
            eget malesuada ligula egestas vel. Pellentesque lacinia ullamcorper
            libero, ut venenatis massa molestie eget.
          </p>
        </div>
        <picture className="flex grow-[2] h-full">
          <img
            id="landingImage"
            src="/landing.jpg"
            alt="landing profile picture of Torie sitting in dramatic bushes"
            className="object-cover"
          />
        </picture>
      </div>
      <div className="flex flex-col items-end w-full g-0">
        <h3 className="font-display text-[36px] -mb-2">Victoria Kim Karpak</h3>
        <h3>Software Developer</h3>
      </div>
    </div>
  );
};

export default HomePage;
