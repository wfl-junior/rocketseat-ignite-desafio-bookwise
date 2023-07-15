import Image from "next/image";
import { User } from "~/database/schemas/users";

interface AvatarProps {
  size: number;
  user: Pick<User, "name" | "avatarUrl">;
}

export function Avatar({ size, user }: AvatarProps): JSX.Element | null {
  const nameParts = user.name.split(" ");
  const firstNameLetter = nameParts.at(0)?.at(0)?.toUpperCase();
  let lastNameLetter: string | undefined = undefined;

  if (nameParts.length > 1) {
    lastNameLetter = nameParts.at(-1)?.at(0)?.toUpperCase();
  }

  return (
    <picture
      style={{ width: size }}
      className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-app-gradient-vertical"
    >
      {user.avatarUrl ? (
        <Image
          alt={user.name}
          width={size * 2}
          height={size * 2}
          src={user.avatarUrl}
          style={{ width: size - 2 }}
          className="m-px aspect-square rounded-[inherit] object-cover"
        />
      ) : (
        <span
          style={{ fontSize: size / 2 }}
          className="text-center font-medium leading-none"
        >
          {firstNameLetter}
          {lastNameLetter}
        </span>
      )}
    </picture>
  );
}
