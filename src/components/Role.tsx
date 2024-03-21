import Image from 'next/image';

interface Props {
  role: string;
  description: string;
  imgSrc: string;
}

const Role = ({ role, description, imgSrc }: Props) => {
  return (
    <div className="flex min-w-[20vw] flex-col items-center justify-start gap-14">
      <Image
        width={150}
        height={150}
        src={imgSrc}
        alt="abstract art"
        className="h-[150px] w-[150px] rounded-b-sm rounded-t-full object-cover"
      />
      <div className="flex flex-col gap-[15px]">
        <h3 className="hyphens-auto text-center font-display text-4xl font-bold leading-[42px] text-magentaPink dark:font-medium dark:text-chartreuse">
          {role}
        </h3>
        <p className="text-center text-base font-normal leading-tight tracking-wide dark:font-light">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Role;
