import Role from '@/components/Role';

const RolesPage = () => {
  return (
    <div className="px-[3.1vw] py-36">
      <div className="flex flex-col items-start justify-between gap-20 md:flex-row">
        <Role
          role="Fullstack Development"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="/pages/code-default.jpeg"
        />
        <Role
          role="Graphic Design"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="/pages/design-default.jpeg"
        />
        <Role
          role="Mentorship"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="/pages/mentor-default.jpeg"
        />
      </div>
    </div>
  );
};

export default RolesPage;
