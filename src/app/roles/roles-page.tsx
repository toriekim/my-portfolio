import Role from '@/components/Role';

const RolesPage = () => {
  return (
    <div className="px-[3.1vw] py-36">
      <div className="flex flex-col items-start justify-between gap-20 md:flex-row">
        <Role
          role="Fullstack Development"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Role
          role="Graphic Design"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Role
          role="Mentorship"
          description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          imgSrc="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default RolesPage;
