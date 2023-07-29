import Link from "next/link";
import { PopularBookCard } from "~/components/PopularBookCard";
import { CaretRightIcon } from "~/components/icons/CaretRightIcon";

interface PopularBooksProps {}

export function PopularBooks({}: PopularBooksProps): JSX.Element | null {
  return (
    // extra 1.25rem is from the body padding bottom
    <section className="sticky top-5 flex h-full max-h-[calc(100vh-(1.25rem+1.25rem))] flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-normal text-app-gray-100">
          Livros populares
        </h2>

        <Link
          href="/explore"
          className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold text-app-purple-100 transition-colors hover:bg-app-purple-100/5"
        >
          <span>Ver todos</span>
          <CaretRightIcon size={16} />
        </Link>
      </div>

      <div className="relative flex-1">
        <div className="absolute inset-0 flex flex-col gap-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-app-gray-600 scrollbar-thumb-app-gray-700 scrollbar-thumb-rounded scrollbar-track-rounded">
          <PopularBookCard
            isRead
            averageStars={5}
            book={{
              author: "George Orwell",
              title: "A revolução dos bichos",
              cover: "/covers/a-revolucao-dos-bichos.png",
            }}
          />

          <PopularBookCard
            averageStars={4}
            book={{
              author: "Zeno Rocha",
              title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
              cover:
                "/covers/14-habitos-de-desenvolvedores-altamente-produtivos.png",
            }}
          />

          <PopularBookCard
            averageStars={4}
            book={{
              author: "Isaac Asimov",
              title: "O Fim da Eternidade",
              cover: "/covers/o-fim-da-eternidade.png",
            }}
          />

          <PopularBookCard
            averageStars={4}
            book={{
              author: "Aditya Bhargava",
              title: "Entendendo Algoritmos",
              cover: "/covers/entendendo-algoritmos.png",
            }}
          />
        </div>
      </div>
    </section>
  );
}
