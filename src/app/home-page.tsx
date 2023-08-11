import BackgroundPhoto from '@/components/BackgroundPhoto';
import landingPhoto from '../../public/landing.jpg';

const HomePage = () => {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-between">
      <BackgroundPhoto
        src={landingPhoto}
        alt="landing profile picture of Torie sitting in dramatic bushes"
        className="z-0 object-center"
      />
      <h1 className="font-display absolute bottom-1/3 mx-5 text-center text-8xl text-white">
        Hi, I&apos;m Torie
      </h1>
    </div>
  );
};

export default HomePage;
