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
        width={130}
        height={130}
        src={imgSrc}
        alt="abstract art"
        className="h-[130px] w-[130px] object-cover"
      />
      <div className="flex flex-col gap-[15px]">
        <h3 className="hyphens-auto text-center font-display text-4xl font-bold leading-[42px] text-magentaPink">
          {role}
        </h3>
        <p className="text-center text-base font-normal leading-tight tracking-wide">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Role;
