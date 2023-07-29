import dayjs from "dayjs";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { User } from "~/database/schemas/users";
import { Avatar } from "./Avatar";
import { BookStars } from "./BookStars";

interface BookReviewCardProps {
  text: string;
  createdAt: string;
  user: Pick<User, "id" | "name" | "avatarUrl">;
  stars: number;
  book: {
    id: string;
    title: string;
    author: string;
    cover: StaticImageData | string;
  };
}

export function BookReviewCard({
  user,
  text,
  book,
  stars,
  createdAt,
}: BookReviewCardProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-app-gray-700 p-6">
      <div className="flex items-start gap-4">
        <Link href={`/profile/${user.id}`}>
          <Avatar size={40} user={user} />
        </Link>

        <div className="flex flex-col">
          <strong className="text-base font-normal leading-relaxed text-app-gray-100">
            {user.name}
          </strong>

          <span className="text-sm font-normal leading-relaxed text-app-gray-400">
            {dayjs(createdAt).fromNow()}
          </span>
        </div>

        <div className="ml-auto">
          <BookStars stars={stars} />
        </div>
      </div>

      <div className="flex items-start gap-5">
        <Link
          href={{
            pathname: "/explore",
            query: {
              bookId: book.id,
            },
          }}
        >
          <Image
            width={108}
            height={152}
            src={book.cover}
            className="rounded object-cover"
            alt={`${book.author} - ${book.title}`}
          />
        </Link>

        <div className="flex flex-1 flex-col">
          <h3 className="text-base font-bold leading-snug text-app-gray-100">
            {book.title}
          </h3>

          <span className="text-sm font-normal leading-relaxed text-app-gray-400">
            {book.author}
          </span>

          <p className="mt-5 text-sm font-bold leading-relaxed text-app-gray-300">
            {text.slice(0, 230)}
            {text.length > 230 && (
              <Fragment>
                ...&nbsp;
                <Link
                  className="text-app-purple-100 transition-colors hover:text-app-purple-200"
                  href={{
                    pathname: "/explore",
                    query: {
                      bookId: ":id",
                    },
                  }}
                >
                  ver mais
                </Link>
              </Fragment>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
