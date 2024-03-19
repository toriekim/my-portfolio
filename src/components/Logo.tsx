import Image from 'next/image';

interface Props {
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
  theme?: string;
}

const Logo = ({ width, height, className, theme }: Props) => {
  return (
    <Image
      src={theme === 'dark' ? '/logos/light-logo.png' : '/logos/dark-logo.png'}
      alt="personal brand logo for VK"
      width={width}
      height={height}
      className={'z-50 ' + (className ?? '')}
    />
  );
};

export default Logo;
