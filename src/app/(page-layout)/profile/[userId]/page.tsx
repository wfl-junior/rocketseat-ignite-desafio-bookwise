import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BackButton } from "~/components/BackButton";
import { PageTitle } from "~/components/PageTitle";
import { ReviewedBookCard } from "~/components/ReviewedBookCard";
import { UserIcon } from "~/components/icons/UserIcon";
import { User } from "~/database/schemas/users";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";
import { getUserById } from "~/utils/get-user-by-id";
import { ProfileSection } from "./ProfileSection";
import { ReviewedBooksSearchForm } from "./ReviewedBooksSearchForm";

interface ProfileProps {
  params: {
    userId: User["id"];
  };
  searchParams: {
    search?: string;
  };
}

interface ProfileUserData {
  user: User | null;
  isAuthenticatedUser: boolean;
}

async function getProfileUser(
  params: ProfileProps["params"],
): Promise<ProfileUserData> {
  const authenticatedUser = await getAuthenticatedUser();

  if (!authenticatedUser) {
    return redirect("/");
  }

  if (authenticatedUser.id === params.userId) {
    return {
      user: authenticatedUser,
      isAuthenticatedUser: true,
    };
  }

  return {
    isAuthenticatedUser: false,
    user: await getUserById(params.userId),
  };
}

export async function generateMetadata({
  params,
}: ProfileProps): Promise<Metadata> {
  const { user } = await getProfileUser(params);

  if (!user) {
    return {
      title: "Perfil não encontrado | BookWise",
    };
  }

  return {
    title: `${user.name} | BookWise`,
  };
}

async function Profile({
  params,
  searchParams,
}: ProfileProps): Promise<JSX.Element | null> {
  const { user, isAuthenticatedUser } = await getProfileUser(params);

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-1 flex-col gap-10">
      {isAuthenticatedUser ? (
        <PageTitle icon={UserIcon} heading="Perfil" />
      ) : (
        <BackButton />
      )}

      <div className="grid h-full grid-cols-[1fr_324px] gap-16">
        <div className="flex flex-col gap-8">
          <ReviewedBooksSearchForm defaultSearch={searchParams.search} />

          <div className="flex flex-col gap-6">
            <ReviewedBookCard
              createdAt="2023-07-16T12:00:00.000Z"
              text="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhoansiuh"
              stars={5}
              book={{
                id: "1",
                title: "O Hobbit",
                author: "J.R.R. Tolkien",
                cover: "/covers/o-hobbit.png",
              }}
            />

            <ReviewedBookCard
              createdAt="2023-07-15T12:00:00.000Z"
              text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget."
              stars={4}
              book={{
                id: "2",
                author: "Douglas Adams",
                title: "O guia do mochileiro das galáxias",
                cover: "/covers/o-guia-do-mochileiro-das-galaxias.png",
              }}
            />

            <ReviewedBookCard
              createdAt="2023-07-14T12:00:00.000Z"
              text="Integer at tincidunt sed mi. Venenatis nunc justo porta viverra lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus senectus elit porta lorem."
              stars={4}
              book={{
                id: "3",
                author: "Aditya Bhargava",
                title: "Entendendo Algoritmos",
                cover: "/covers/entendendo-algoritmos.png",
              }}
            />

            <ReviewedBookCard
              createdAt="2023-07-13T12:00:00.000Z"
              text="Ornare amet scelerisque eget sit in donec dui. Tempus eget porttitor hendrerit eros viverra. Sit eget ipsum purus morbi curabitur cras gravida adipiscing dictum. Dui duis ut auctor dolor et mattis ultrices. Convallis quis in tortor pretium hendrerit sed. Vel et nibh sodales blandit egestas a quis bibendum."
              stars={4}
              book={{
                id: "4",
                author: "Junji Ito",
                title: "Fragmentos do Horror",
                cover: "/covers/fragmentos-do-horror.png",
              }}
            />

            <ReviewedBookCard
              createdAt="2023-07-12T12:00:00.000Z"
              text="Nunc iaculis adipiscing ut sem a ut risus vel facilisi. Posuere pharetra sollicitudin sem velit sodales. Diam semper arcu nulla quis sapien nibh. Ut eget orci ipsum sed quis cras morbi placerat. Nec non at arcu adipiscing. Aenean cras ultrices cursus congue. Diam quis est proin id facilisi. Ac cras iaculis quam lectus eros orci semper fames amet. Id consequat purus faucibus pulvinar nisl molestie semper."
              stars={3}
              book={{
                id: "5",
                author: "Edgar Allan Poe",
                title: "Histórias extraordinárias",
                cover: "/covers/historias-extraordinarias.png",
              }}
            />

            <ReviewedBookCard
              createdAt="2023-07-11T12:00:00.000Z"
              text="Facilisis massa turpis morbi et. Aliquet arcu tellus id erat a lobortis et consectetur. Sit sit urna turpis vulputate. Morbi et leo in elit vitae bibendum scelerisque congue. Eget neque elementum non consequat lacus metus. Amet enim rhoncus neque proin purus nisl eget diam tellus. Id pellentesque nibh pellentesque pharetra viverra donec diam."
              stars={3}
              book={{
                id: "6",
                author: "Julio Verne",
                title: "Viagem ao Centro da Terra",
                cover: "/covers/viagem-ao-centro-da-terra.png",
              }}
            />
          </div>
        </div>

        <ProfileSection user={user} />
      </div>
    </div>
  );
}

export default Profile;
