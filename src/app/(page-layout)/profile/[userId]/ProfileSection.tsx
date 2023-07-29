import dayjs from "dayjs";
import { Avatar } from "~/components/Avatar";
import { BookOpenIcon } from "~/components/icons/BookOpenIcon";
import { BookmarkSimpleIcon } from "~/components/icons/BookmarkSimpleIcon";
import { BooksIcon } from "~/components/icons/BooksIcon";
import { UserListIcon } from "~/components/icons/UserListIcon";
import { User } from "~/database/schemas/users";

interface DataGroup {
  title: string;
  description: string;
  icon: typeof BookOpenIcon;
}

interface ProfileSectionProps {
  user: User;
}

export function ProfileSection({
  user,
}: ProfileSectionProps): JSX.Element | null {
  const dataGroups: DataGroup[] = [
    {
      title: "3853",
      description: "Páginas lidas",
      icon: BookOpenIcon,
    },
    {
      title: "10",
      description: "Livros avaliados",
      icon: BooksIcon,
    },
    {
      title: "8",
      description: "Autores lidos",
      icon: UserListIcon,
    },
    {
      title: "Computação",
      description: "Categoria mais lida",
      icon: BookmarkSimpleIcon,
    },
  ];

  return (
    // extra 1.25rem is from the body padding bottom
    <section className="sticky top-5 flex h-max max-h-[calc(100vh-(1.25rem+1.25rem))] flex-col items-center border-l border-app-gray-700">
      <Avatar user={user} size={72} />

      <strong className="mt-5 text-center text-xl font-bold leading-snug text-app-gray-100">
        {user.name}
      </strong>

      <span className="text-center text-sm font-normal leading-relaxed text-app-gray-400">
        membro desde {dayjs(user.createdAt).fromNow()}
      </span>

      <div
        role="separator"
        className="my-8 h-2 w-8 rounded-full bg-app-gradient-horizontal"
      />

      <div className="flex w-full flex-col gap-10 px-14 py-5">
        {dataGroups.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex items-center gap-5">
            <Icon size={32} className="text-app-green-100" />

            <div className="flex flex-col">
              <strong className="text-base font-bold leading-snug text-app-gray-200">
                {title}
              </strong>

              <span className="text-sm font-normal leading-relaxed text-app-gray-300">
                {description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
