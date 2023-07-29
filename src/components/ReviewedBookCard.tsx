import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BookStars } from "./BookStars";

interface ReviewedBookCardProps {
  createdAt: string;
  text: string;
  stars: number;
  book: {
    id: string;
    title: string;
    author: string;
    cover: StaticImageData | string;
  };
}

export function ReviewedBookCard({
  book,
  text,
  stars,
}: ReviewedBookCardProps): JSX.Element | null {
  return (
    <Link
      className="flex flex-col gap-6 rounded-lg border-2 border-app-gray-700 bg-app-gray-700 p-6 transition-colors hover:border-app-gray-600"
      href={{
        pathname: "/explore",
        query: {
          bookId: book.id,
        },
      }}
    >
      <div className="flex gap-6">
        <Image
          width={98}
          height={134}
          src={book.cover}
          alt={`${book.author} - ${book.title}`}
          className="self-start rounded object-cover"
        />

        <div className="flex flex-col gap-0.5">
          <strong className="text-lg font-bold leading-snug text-app-gray-100">
            {book.title}
          </strong>

          <span className="text-sm font-normal leading-relaxed text-app-gray-400">
            {book.author}
          </span>

          <div className="mt-auto">
            <BookStars stars={stars} />
          </div>
        </div>
      </div>

      <p className="text-sm font-normal leading-relaxed text-app-gray-300">
        {text}
      </p>
    </Link>
  );
}
