import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BackButton } from "~/components/BackButton";
import { PageTitle } from "~/components/PageTitle";
import { UserIcon } from "~/components/icons/UserIcon";
import { User } from "~/database/schemas/users";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";
import { getUserById } from "~/utils/get-user-by-id";

interface ProfileProps {
  params: {
    userId: string;
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

async function Profile({ params }: ProfileProps): Promise<JSX.Element | null> {
  const { user, isAuthenticatedUser } = await getProfileUser(params);

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-10">
      {isAuthenticatedUser ? (
        <PageTitle icon={UserIcon} heading="Perfil" />
      ) : (
        <BackButton />
      )}
    </div>
  );
}

export default Profile;
