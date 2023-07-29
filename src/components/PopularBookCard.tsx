import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BookStars } from "./BookStars";

interface PopularBookCardProps {
  isRead?: boolean;
  averageStars: number;
  book: {
    title: string;
    author: string;
    cover: StaticImageData | string;
  };
}

export function PopularBookCard({
  book,
  averageStars,
  isRead = false,
}: PopularBookCardProps): JSX.Element | null {
  return (
    <Link
      className="relative flex w-full gap-5 rounded-lg border-2 border-app-gray-700 bg-app-gray-700 px-5 py-4 transition-colors hover:border-app-gray-600"
      href={{
        pathname: "/explore",
        query: {
          bookId: ":id",
        },
      }}
    >
      <Image
        width={64}
        height={94}
        src={book.cover}
        alt={`${book.author} - ${book.title}`}
        className="self-start rounded object-cover"
      />

      <div className="flex flex-1 flex-col">
        <strong className="line-clamp-2 text-base font-bold leading-snug text-app-gray-100">
          {book.title}
        </strong>

        <span className="text-sm font-normal leading-relaxed text-app-gray-400">
          {book.author}
        </span>

        <div className="mt-auto">
          <BookStars stars={averageStars} />
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
