import Role from '@/components/Role';
import { userData } from '@/constants/userData';

const RolesPage = () => {
  return (
    <div className="px-[3.1vw] py-36">
      <div className="flex flex-col items-start justify-between gap-20 md:flex-row">
        {userData.roles.map((role, idx) => (
          <Role
            key={`role-${role.name}-${idx}`}
            role={role.name}
            description={role.description}
            imgSrc={role.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RolesPage;
