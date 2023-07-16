"use client";

import { useRouter } from "next/navigation";
import { CaretLeftIcon } from "./icons/CaretLeftIcon";

interface BackButtonProps {}

export function BackButton({}: BackButtonProps): JSX.Element | null {
  const { back } = useRouter();

  return (
    <button
      onClick={back}
      className="flex items-center gap-3 rounded px-2 py-1 text-base font-bold text-app-gray-200 transition-colors hover:bg-app-gray-200/5"
    >
      <CaretLeftIcon size={20} />
      <span>Voltar</span>
    </button>
  );
}
