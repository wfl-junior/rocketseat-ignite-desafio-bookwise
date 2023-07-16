import Link from "next/link";
import aRevolucaoDosBichos from "~/assets/covers/a-revolucao-dos-bichos.png";
import { PopularBookCard } from "~/components/PopularBookCard";
import { CaretRightIcon } from "~/components/icons/CaretRightIcon";

interface PopularBooksProps {}

export function PopularBooks({}: PopularBooksProps): JSX.Element | null {
  return (
    <section className="sticky top-4 flex flex-1 flex-col gap-4">
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
            stars={5}
            author="George Orwell"
            title="A revolução dos bichos"
            imageSrc={aRevolucaoDosBichos}
          />

          <PopularBookCard
            stars={4}
            author="George Orwell"
            title="A revolução dos bichos"
            imageSrc={aRevolucaoDosBichos}
          />
        </div>
      </div>
    </section>
  );
}
