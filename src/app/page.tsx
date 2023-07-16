import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BookWiseCoverLayout } from "~/components/BookWiseCoverLayout";
import { LoginButton } from "~/components/LoginButton";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { GoogleIcon } from "~/components/icons/GoogleIcon";
import { RocketLaunchIcon } from "~/components/icons/RocketLaunchIcon";
import { GOOGLE_AUTH_REDIRECT_URL } from "~/utils/constants";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";

export const metadata: Metadata = {
  title: "Login | BookWise",
};

interface LoginProps {}

async function Login({}: LoginProps): Promise<JSX.Element | null> {
  const user = await getAuthenticatedUser();

  if (user) {
    return redirect("/home");
  }

  return (
    <BookWiseCoverLayout>
      <div className="flex w-full max-w-[372px] flex-col gap-10">
        <div>
          <h1 className="text-2xl font-bold leading-snug text-app-gray-100">
            Boas vindas!
          </h1>

          <p className="mt-0.5 text-base font-normal leading-relaxed text-app-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <LoginButton
            as={Link}
            href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}`}
          >
            <GoogleIcon />
            <span>Entrar com Google</span>
          </LoginButton>

          <LoginButton
            as={Link}
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          >
            <GitHubIcon />
            <span>Entrar com GitHub</span>
          </LoginButton>

          <LoginButton as={Link} href="/home">
            <RocketLaunchIcon size={32} className="text-app-purple-100" />
            <span>Acessar como visitante</span>
          </LoginButton>
        </div>
      </div>
    </BookWiseCoverLayout>
  );
}

export default Login;
