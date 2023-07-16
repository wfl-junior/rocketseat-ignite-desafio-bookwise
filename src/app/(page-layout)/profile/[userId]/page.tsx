import { redirect } from "next/navigation";
import { PageTitle } from "~/components/PageTitle";
import { UserIcon } from "~/components/icons/UserIcon";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";

interface ProfileProps {}

async function Profile({}: ProfileProps): Promise<JSX.Element | null> {
  const user = await getAuthenticatedUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="flex flex-col gap-10">
      <PageTitle icon={UserIcon} heading="Perfil" />
    </div>
  );
}

export default Profile;
