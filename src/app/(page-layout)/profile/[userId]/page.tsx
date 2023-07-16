import { notFound, redirect } from "next/navigation";
import { BackButton } from "~/components/BackButton";
import { PageTitle } from "~/components/PageTitle";
import { UserIcon } from "~/components/icons/UserIcon";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";
import { getUserById } from "~/utils/get-user-by-id";

interface ProfileProps {
  params: {
    userId: string;
  };
}

export async function generateMetadata({ params }: ProfileProps) {
  const user = await getUserById(params.userId);

  if (!user) {
    return {
      title: "Perfil não encontrado | BookWise",
    };
  }

  return {
    title: `${user.name} | BookWise`,
  };
}

async function Profile({ params }: ProfileProps): Promise<JSX.Element | null> {
  const authenticatedUser = await getAuthenticatedUser();

  if (!authenticatedUser) {
    return redirect("/");
  }

  const user =
    authenticatedUser.id === params.userId
      ? authenticatedUser
      : await getUserById(params.userId);

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-10">
      {authenticatedUser.id === params.userId ? (
        <PageTitle icon={UserIcon} heading="Perfil" />
      ) : (
        <BackButton />
      )}
    </div>
  );
}

export default Profile;
