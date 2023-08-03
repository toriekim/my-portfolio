import BackgroundPhoto from '@/components/BackgroundPhoto';
import Logo from '@/components/Logo';
import landingPhoto from '../../public/landing.jpg';

const HomePage = () => {
  return (
    <div className="relative flex h-[100vh] flex-col items-center justify-between">
      <Logo width={90} height={90} className="self-start" />
      <BackgroundPhoto
        src={landingPhoto}
        alt="landing profile picture of Torie sitting in dramatic bushes"
        className="object-center"
      />
      <h1
        className={`font-display absolute bottom-1/3 z-50 mx-5 text-center text-8xl
        `}
      >
        Hi, I'm Torie
      </h1>
    </div>
  );
};

export default HomePage;
