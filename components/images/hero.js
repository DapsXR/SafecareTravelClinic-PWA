import { Image } from '@nextui-org/react';

export default function HeroImage() {
  return (
    <Image
      width={1064}
      height={768}  
      src="/hero.png"
      alt="Default Image"
      objectFit="cover" 
    />
  );
}
