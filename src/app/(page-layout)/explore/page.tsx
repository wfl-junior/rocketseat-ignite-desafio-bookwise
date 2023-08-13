import type { Metadata } from "next";
import { Fragment } from "react";
import { BookCard } from "~/components/BookCard";
import { BookDrawer } from "~/components/BookDrawer";
import { ExploreFilterButton } from "~/components/ExploreFilterButton";
import { PageTitle } from "~/components/PageTitle";
import { SearchForm } from "~/components/SearchForm";
import { BinocularsIcon } from "~/components/icons/BinocularsIcon";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";

export const metadata: Metadata = {
  title: "Explorar | BookWise",
};

interface ExploreProps {
  searchParams: {
    search?: string;
    bookId?: string;
  };
}

async function Explore({
  searchParams,
}: ExploreProps): Promise<JSX.Element | null> {
  const user = await getAuthenticatedUser();

  return (
    <Fragment>
      {searchParams.bookId ? (
        <BookDrawer user={user} bookId={searchParams.bookId} />
      ) : null}

      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between gap-4">
          <PageTitle icon={BinocularsIcon} heading="Explorar" />

          <SearchForm
            className="w-full max-w-md"
            placeholder="Buscar livro ou autor"
            defaultSearch={searchParams.search}
          />
        </div>

        <div className="flex items-center gap-3 overflow-x-auto p-0.5 scrollbar-thin scrollbar-track-app-gray-600 scrollbar-thumb-app-gray-700 scrollbar-thumb-rounded scrollbar-track-rounded">
          <ExploreFilterButton label="Tudo" />
          <ExploreFilterButton label="Computação" />
          <ExploreFilterButton label="Educação" />
          <ExploreFilterButton label="Fantasia" />
          <ExploreFilterButton label="Ficção científica" />
          <ExploreFilterButton label="Horror" />
          <ExploreFilterButton label="HQs" />
          <ExploreFilterButton label="Suspense" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))] gap-5">
          <BookCard
            isRead
            averageStars={5}
            linkScroll={false}
            book={{
              id: "1",
              author: "George Orwell",
              title: "A revolução dos bichos",
              cover: "/covers/a-revolucao-dos-bichos.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "2",
              author: "Zeno Rocha",
              title: "14 Hábitos de Desenvolvedores Altamente Produtivos",
              cover:
                "/covers/14-habitos-de-desenvolvedores-altamente-produtivos.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "3",
              author: "Isaac Asimov",
              title: "O Fim da Eternidade",
              cover: "/covers/o-fim-da-eternidade.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "4",
              author: "Aditya Bhargava",
              title: "Entendendo Algoritmos",
              cover: "/covers/entendendo-algoritmos.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "5",
              author: "Robert C. Martin",
              title: "Código limpo",
              cover: "/covers/codigo-limpo.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "6",
              author: "Charles Duhigg",
              title: "O poder do hábito",
              cover: "/covers/o-poder-do-habito.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "7",
              author: "Robert C. Martin",
              title: "Arquitetura limpa",
              cover: "/covers/arquitetura-limpa.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "8",
              author: "J.R.R. Tolkien",
              title: "O Hobbit",
              cover: "/covers/o-hobbit.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "9",
              author: "Edgar Allan Poe",
              title: "Histórias extraordinárias",
              cover: "/covers/historias-extraordinarias.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "10",
              author: "Martin Fowler",
              title: "Refatoração",
              cover: "/covers/refatoracao.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "11",
              author: "Eric Evans",
              title: "Domain-Driven Design",
              cover: "/covers/domain-driven-design.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "12",
              author: "Julio Verne",
              title: "Viagem ao Centro da Terra",
              cover: "/covers/viagem-ao-centro-da-terra.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "13",
              author: "Douglas Adams",
              title: "O guia do mochileiro das galáxias",
              cover: "/covers/o-guia-do-mochileiro-das-galaxias.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "14",
              author: "Junji Ito",
              title: "Fragmentos do Horror",
              cover: "/covers/fragmentos-do-horror.png",
            }}
          />

          <BookCard
            averageStars={4}
            linkScroll={false}
            book={{
              id: "15",
              author: "Andrew Hunt",
              title: "O Programador Pragmático",
              cover: "/covers/o-programador-pragmatico.png",
            }}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Explore;
