import { userData } from '@/constants/userData';
import Icon from './IconLink';

export default function Footer() {
  return (
    <div className="mx-auto w-full px-10 py-10 md:py-20">
      <div
        className="h-0.5 w-full bg-primaryGreen bg-opacity-30
      dark:bg-yellowParchment dark:bg-opacity-20"
      ></div>
      <div className="mt-8 flex flex-col justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <div>
          <p>&copy; Torie Kim. All Rights Reserved.</p>
        </div>

        <div className="flex flex-row items-center space-x-4">
          {/* LinkedIn */}
          <Icon
            icon="linkedin"
            href={userData.socialLinks.linkedin}
            height="24"
            viewBox="0 0 448 512"
          />
          {/* Github */}
          <Icon
            icon="github"
            href={userData.socialLinks.github}
            height="23"
            viewBox="0 0 496 512"
          />
          {/* Email */}
          <Icon
            icon="mailto"
            href={`mailto:${userData.email}`}
            height="20"
            viewBox="0 0 512 512"
          />
        </div>
      </div>
    </div>
  );
}
