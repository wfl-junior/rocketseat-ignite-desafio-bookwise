import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { StarFillIcon } from "./icons/StarFillIcon";
import { StarOutlineIcon } from "./icons/StarOutlineIcon";

const maxStars = 5;

interface PopularBookCardProps {
  title: string;
  stars: number;
  author: string;
  isRead?: boolean;
  imageSrc: StaticImageData;
}

export function PopularBookCard({
  title,
  stars,
  author,
  imageSrc,
  isRead = false,
}: PopularBookCardProps): JSX.Element | null {
  return (
    <Link
      href="#"
      className="relative flex w-full gap-5 rounded-lg border-2 border-app-gray-700 bg-app-gray-700 px-5 py-4 transition-colors hover:border-app-gray-600"
    >
      <Image
        width={64}
        height={94}
        src={imageSrc}
        alt={`${author} - ${title}`}
        className="self-center rounded object-cover"
      />

      <div className="flex flex-1 flex-col">
        <strong className="text-base font-bold leading-snug text-app-gray-100">
          {title}
        </strong>

        <span className="text-sm leading-relaxed text-app-gray-400">
          {author}
        </span>

        <div className="mt-auto flex items-center gap-1 text-app-purple-100">
          {Array.from({ length: maxStars }).map((_, index) => {
            const iteration = index + 1;
            const Icon = iteration > stars ? StarOutlineIcon : StarFillIcon;

            return <Icon key={index} size={16} />;
          })}
        </div>
      </div>

      {isRead && (
        <span className="absolute -right-0.5 -top-0.5 rounded-bl-lg rounded-tr-lg bg-app-green-300 px-2.5 py-0.5 text-xs uppercase text-app-green-100">
          Lido
        </span>
      )}
    </Link>
  );
}
