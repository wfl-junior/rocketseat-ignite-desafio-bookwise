import { PageTitle } from "~/components/PageTitle";
import { UserIcon } from "~/components/icons/UserIcon";

interface ProfileProps {}

function Profile({}: ProfileProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle icon={UserIcon} heading="Perfil" />
    </div>
  );
}

export default Profile;
