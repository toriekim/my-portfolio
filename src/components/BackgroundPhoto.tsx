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
      fill
      placeholder="blur"
      quality={100}
      className={'min-w-full object-cover ' + (className ?? '')}
      sizes="100vw"
      priority
      unoptimized
    />
  );
};

export default BackgroundPhoto;
