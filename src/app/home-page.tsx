import BackgroundPhoto from '@/components/BackgroundPhoto';
import Logo from '@/components/Logo';

const HomePage = () => {
  return (
    <div className="flex h-[65vh] flex-col items-center justify-between">
      <Logo width={100} height={100} className="self-start" />
      <BackgroundPhoto
        src="/landing.jpg"
        alt="landing profile picture of Torie sitting in dramatic bushes"
        className="object-bottom"
      />
      <h1 className="font-display z-50 text-6xl">Hi, I'm Torie</h1>
    </div>
  );
};

export default HomePage;
