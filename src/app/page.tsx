import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import loginImage from "~/assets/login-image.png";
import { LoginButton } from "~/components/LoginButton";
import { Logo } from "~/components/Logo";
import { GitHubIcon } from "~/components/icons/GitHubIcon";
import { GoogleIcon } from "~/components/icons/GoogleIcon";
import { RocketLaunchIcon } from "~/components/icons/RocketLaunchIcon";
import { GOOGLE_AUTH_REDIRECT_URL } from "~/utils/constants";
import { getAuthenticatedUser } from "~/utils/get-authenticated-user";

interface LoginProps {}

async function Login({}: LoginProps): Promise<JSX.Element | null> {
  const user = await getAuthenticatedUser();

  if (user) {
    return redirect("/home");
  }

  return (
    <div className="flex flex-1 flex-col-reverse gap-6 lg:flex-row lg:items-stretch">
      <div className="relative isolate mx-auto flex h-[800px] w-full max-w-[598px] items-center justify-center overflow-hidden rounded-xl lg:mx-0 lg:h-auto">
        <Image
          alt=""
          quality={100}
          src={loginImage}
          className="absolute -z-1 h-full w-full object-cover"
        />

        <Logo />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
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
      </div>
    </div>
  );
}

export default Login;
