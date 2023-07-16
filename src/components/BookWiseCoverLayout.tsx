import Image from "next/image";
import bookwiseCover from "~/assets/bookwise-cover.png";
import { Logo } from "./Logo";

interface BookWiseCoverLayoutProps {
  children: React.ReactNode;
}

export function BookWiseCoverLayout({
  children,
}: BookWiseCoverLayoutProps): JSX.Element | null {
  return (
    <div className="flex flex-1 flex-col-reverse gap-6 lg:flex-row lg:items-stretch">
      <div className="relative isolate mx-auto flex h-[800px] w-full max-w-[598px] items-center justify-center overflow-hidden rounded-xl lg:mx-0 lg:h-auto">
        <Image
          alt=""
          priority
          quality={100}
          src={bookwiseCover}
          className="absolute -z-1 h-full w-full object-cover"
        />

        <Logo />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
