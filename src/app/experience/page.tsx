import Roles from './roles-page';
import Experience from './experience-page';
import Skills from './skills-page';

const Page = () => {
  return (
    <main className="mx-[7vw] pt-[-50px] md:mx-[6.2vw]">
      <Roles />
      <Skills />
      <Experience />
    </main>
  );
};

export default Page;
