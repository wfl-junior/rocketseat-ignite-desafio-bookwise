import { BookReviewCard } from "~/components/BookReviewCard";

interface RecentReviewsProps {}

export function RecentReviews({}: RecentReviewsProps): JSX.Element | null {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-normal text-app-gray-100">
        Avaliações mais recentes
      </h2>

      <div className="flex flex-col gap-3">
        <BookReviewCard
          createdAt="2023-07-16T12:00:00.000Z"
          text="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhoansiuh"
          stars={5}
          user={{
            avatarUrl: null,
            name: "Jaxson Dias",
          }}
          book={{
            title: "O Hobbit",
            author: "J.R.R. Tolkien",
            cover: "/covers/o-hobbit.png",
          }}
        />

        <BookReviewCard
          createdAt="2023-07-15T12:00:00.000Z"
          text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget."
          stars={4}
          user={{
            avatarUrl: null,
            name: "Brandon Botosh",
          }}
          book={{
            author: "Douglas Adams",
            title: "O guia do mochileiro das galáxias",
            cover: "/covers/o-guia-do-mochileiro-das-galaxias.png",
          }}
        />

        <BookReviewCard
          createdAt="2023-07-14T12:00:00.000Z"
          text="Integer at tincidunt sed mi. Venenatis nunc justo porta viverra lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus senectus elit porta lorem."
          stars={4}
          user={{
            avatarUrl: null,
            name: "Lindsey Philips",
          }}
          book={{
            author: "Aditya Bhargava",
            title: "Entendendo Algoritmos",
            cover: "/covers/entendendo-algoritmos.png",
          }}
        />

        <BookReviewCard
          createdAt="2023-07-13T12:00:00.000Z"
          text="Ornare amet scelerisque eget sit in donec dui. Tempus eget porttitor hendrerit eros viverra. Sit eget ipsum purus morbi curabitur cras gravida adipiscing dictum. Dui duis ut auctor dolor et mattis ultrices. Convallis quis in tortor pretium hendrerit sed. Vel et nibh sodales blandit egestas a quis bibendum."
          stars={4}
          user={{
            avatarUrl: null,
            name: "Cristofer Rosser",
          }}
          book={{
            author: "Junji Ito",
            title: "Fragmentos do Horror",
            cover: "/covers/fragmentos-do-horror.png",
          }}
        />

        <BookReviewCard
          createdAt="2023-07-13T12:00:00.000Z"
          text="Nunc iaculis adipiscing ut sem a ut risus vel facilisi. Posuere pharetra sollicitudin sem velit sodales. Diam semper arcu nulla quis sapien nibh. Ut eget orci ipsum sed quis cras morbi placerat. Nec non at arcu adipiscing. Aenean cras ultrices cursus congue. Diam quis est proin id facilisi. Ac cras iaculis quam lectus eros orci semper fames amet. Id consequat purus faucibus pulvinar nisl molestie semper."
          stars={3}
          user={{
            avatarUrl: null,
            name: "Brandon Botosh",
          }}
          book={{
            author: "Edgar Allan Poe",
            title: "Histórias extraordinárias",
            cover: "/covers/historias-extraordinarias.png",
          }}
        />

        <BookReviewCard
          createdAt="2023-07-13T12:00:00.000Z"
          text="Facilisis massa turpis morbi et. Aliquet arcu tellus id erat a lobortis et consectetur. Sit sit urna turpis vulputate. Morbi et leo in elit vitae bibendum scelerisque congue. Eget neque elementum non consequat lacus metus. Amet enim rhoncus neque proin purus nisl eget diam tellus. Id pellentesque nibh pellentesque pharetra viverra donec diam."
          stars={3}
          user={{
            avatarUrl: null,
            name: "Jaxson Dias",
          }}
          book={{
            author: "Julio Verne",
            title: "Viagem ao Centro da Terra",
            cover: "/covers/viagem-ao-centro-da-terra.png",
          }}
        />
      </div>
    </section>
  );
}
