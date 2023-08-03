import Image from 'next/image';

interface Props {
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
}

const Logo = ({ width, height, className }: Props) => {
  return (
    <Image
      src="/main-logo.png"
      alt="personal brand logo for VK"
      width={width}
      height={height}
      className={className ?? 'absolute z-50 m-8'}
    />
  );
};

export default Logo;
