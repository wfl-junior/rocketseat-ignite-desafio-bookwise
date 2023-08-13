import Image from "next/image";
import { formatList } from "~/utils/format-list";
import { BookStars } from "../BookStars";
import { BookOpenIcon } from "../icons/BookOpenIcon";
import { BookmarkSimpleIcon } from "../icons/BookmarkSimpleIcon";

const book = {
  reviewCount: 3,
  averageStars: 4,
  numberOfPages: 160,
  author: "Zeno Rocha",
  categories: ["Computação", "Educação"],
  title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
  cover: "/covers/14-habitos-de-desenvolvedores-altamente-produtivos.png",
};

interface BookDetailsProps {}

export function BookDetails({}: BookDetailsProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-10 rounded-xl bg-app-gray-700 px-8 pb-4 pt-6">
      <div className="flex gap-8">
        <Image
          width={172}
          height={242}
          src={book.cover}
          alt={`${book.author} - ${book.title}`}
          className="self-start rounded-lg object-cover"
        />

        <div className="flex flex-col gap-2">
          <strong className="text-lg font-bold leading-snug text-app-gray-100">
            {book.title}
          </strong>

          <span className="text-base font-normal leading-relaxed text-app-gray-300">
            {book.author}
          </span>

          <div className="mt-auto flex flex-col gap-1">
            <BookStars stars={book.averageStars} />

            <span className="text-sm font-normal leading-relaxed text-app-gray-400">
              {book.reviewCount} avaliações
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-14 border-t border-app-gray-600 py-6">
        <div className="flex items-center gap-4">
          <BookmarkSimpleIcon size={24} className="text-app-green-100" />

          <div className="flex flex-col">
            <span className="text-sm font-normal leading-relaxed text-app-gray-300">
              Categoria{book.categories.length > 0 && "s"}
            </span>

            <span className="text-base font-bold leading-snug text-app-gray-200">
              {formatList(book.categories)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <BookOpenIcon size={24} className="text-app-green-100" />

          <div className="flex flex-col">
            <span className="text-sm font-normal leading-relaxed text-app-gray-300">
              Páginas
            </span>

            <span className="text-base font-bold leading-snug text-app-gray-200">
              {book.numberOfPages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
