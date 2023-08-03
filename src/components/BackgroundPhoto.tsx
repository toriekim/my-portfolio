import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface Props {
  src: string | StaticImport;
  alt: string;
  className?: string;
}

const BackgroundPhoto = ({ src, alt, className }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill={true}
      placeholder="blur"
      className={'min-w-full object-cover ' + (className ?? '')}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default BackgroundPhoto;
