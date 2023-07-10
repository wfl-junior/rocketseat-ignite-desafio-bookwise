import Image from "next/image";
import avatar from "~/assets/avatar.png";

interface AvatarProps {
  size: number;
}

export function Avatar({ size }: AvatarProps): JSX.Element | null {
  return (
    <picture
      style={{ width: size }}
      className="aspect-square overflow-hidden rounded-full bg-app-gradient-vertical"
    >
      <Image
        alt=""
        src={avatar}
        width={size * 2}
        height={size * 2}
        style={{ width: size - 2 }}
        className="m-px aspect-square rounded-[inherit] object-cover"
      />
    </picture>
  );
}
