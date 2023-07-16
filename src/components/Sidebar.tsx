import Image from "next/image";
import Link from "next/link";
import sidebarCover from "~/assets/sidebar-cover.png";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { BinocularsIcon } from "./icons/BinocularsIcon";
import { ChartLineUpIcon } from "./icons/ChartLineUpIcon";
import { SignInIcon } from "./icons/SignInIcon";
import { SignOutIcon } from "./icons/SignOutIcon";
import { UserIcon } from "./icons/UserIcon";

interface SidebarProps {}

export async function Sidebar({}: SidebarProps): Promise<JSX.Element | null> {
  const user = await getAuthenticatedUser();

  return (
    <aside className="fixed inset-y-5 left-5 isolate flex w-[232px] flex-col items-center gap-16 overflow-hidden rounded-xl bg-app-gray-700 pb-6 pt-10">
      <Image
        fill
        alt=""
        priority
        quality={100}
        src={sidebarCover}
        className="absolute -z-1 h-full w-full"
      />

      <Logo width={128} height={32} />

      <nav className="ml-16 flex flex-col gap-4 self-stretch pr-1">
        <NavLink href="/home">
          <ChartLineUpIcon size={24} />
          <span>Início</span>
        </NavLink>

        <NavLink href="/explore">
          <BinocularsIcon size={24} />
          <span>Explorar</span>
        </NavLink>

        {user ? (
          <NavLink href={`/profile/${user.id}`} activePathname="/profile">
            <UserIcon size={24} />
            <span>Perfil</span>
          </NavLink>
        ) : null}
      </nav>

      {user ? (
        <div className="mt-auto flex items-center gap-3">
          <Avatar size={32} user={user} />
          <span className="truncate text-app-gray-200">{user.name}</span>

          <Link
            href="/api/auth/logout"
            className="text-app-red-500 transition-colors hover:text-red-600"
          >
            <SignOutIcon size={20} />
          </Link>
        </div>
      ) : (
        <Link
          href="/"
          className="mt-auto flex items-center gap-3 text-app-gray-200 transition-colors hover:text-white"
        >
          <span>Fazer login</span>
          <SignInIcon size={20} className="text-app-green-100" />
        </Link>
      )}
    </aside>
  );
}
