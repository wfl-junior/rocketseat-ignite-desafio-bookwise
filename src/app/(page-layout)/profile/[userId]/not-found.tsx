import { BackButton } from "~/components/BackButton";

interface ProfileNotFoundProps {}

function ProfileNotFound({}: ProfileNotFoundProps): JSX.Element | null {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-center text-2xl font-bold">Perfil não encontrado</h1>
      <BackButton />
    </div>
  );
}

export default ProfileNotFound;
