import '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="mx-14 mt-[64px] flex h-[calc(100vh-64px)] flex-col items-center gap-10">
      {/* left-side content */}
      <div className="my-5 flex h-[80vh] flex-col-reverse items-end gap-6 sm:flex-row">
        <div className="flex grow flex-col gap-6">
          <h1 className="font-display text-primaryGreen dark:text-yellowParchment -mb-3 text-[10vw] leading-[1em] tracking-wider">
            Hi,&#8202;I&#8217;m Torie
          </h1>
          <p className="pl-3">
            I’m a software developer with an eye for design and an penchant for
            creativity in all its forms and output. Based in Boston, MA, I
            translate solutions into robust applications with meaningful impact.
          </p>
        </div>
        {/* profile image */}
        <picture className="flex h-full grow-[2]">
          <img
            id="landingImage"
            src="/landing-photo.jpg"
            alt="landing profile picture of Torie sitting in dramatic bushes"
            className="object-cover"
          />
        </picture>
      </div>
      <FontAwesomeIcon
        icon={faAngleDown}
        bounce
        size="lg"
        className="text-primaryGreen dark:text-chartreuse"
      />
    </div>
  );
};

export default HomePage;
