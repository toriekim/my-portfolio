import BackgroundPhoto from '@/components/BackgroundPhoto';
import Logo from '@/components/Logo';

const HomePage = () => {
  return (
    <div className="left-0 top-0 flex flex-col content-center">
      <Logo width={200} height={200} />
      <BackgroundPhoto
        src="/landing.jpg"
        alt="landing profile picture of Torie sitting in dramatic bushes"
        className="object-bottom"
      />
      <h1 className="font-display absolute top-1/2 z-50 text-6xl">
        Hi, I'm Torie
      </h1>
    </div>
  );
};

export default HomePage;
