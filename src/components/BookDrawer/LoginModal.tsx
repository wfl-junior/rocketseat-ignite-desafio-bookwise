"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import {
  GOOGLE_AUTH_REDIRECT_URL,
  REDIRECT_ROUTE_COOKIE_NAME,
} from "~/utils/constants";
import { LoginButton } from "../LoginButton";
import { GitHubIcon } from "../icons/GitHubIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { XIcon } from "../icons/XIcon";

interface LoginModalProps {
  setIsFocusTrapPaused: Dispatch<SetStateAction<boolean>>;
}

export function LoginModal({
  setIsFocusTrapPaused,
}: LoginModalProps): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
    setIsFocusTrapPaused(open);
  }

  function handleApplyRedirectRoute() {
    document.cookie = `${REDIRECT_ROUTE_COOKIE_NAME}=${window.location.href}`;
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className="px-2 py-1 text-base font-bold text-app-purple-100 transition-colors hover:text-app-purple-200">
        Avaliar
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/30 backdrop-blur-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
              />
            </Dialog.Overlay>

            <Dialog.Content
              forceMount
              className="fixed bottom-0 left-1/2 z-50 w-full max-w-[516px] -translate-x-1/2 p-2 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2"
            >
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35 },
                }}
                exit={{ opacity: 0, y: 25, transition: { duration: 0.2 } }}
                transition={{ ease: "easeInOut" }}
                className="relative flex flex-col gap-4 rounded-xl bg-app-gray-700 px-18 py-14 shadow-[4px_16px_24px_0_rgba(0,_0,_0,_0.25)]"
              >
                <Dialog.Close
                  title="Fechar"
                  className="absolute right-4 top-4 rounded-full text-app-gray-400 transition-colors hover:text-app-gray-500"
                >
                  <XIcon size={24} />
                </Dialog.Close>

                <Dialog.Title className="mb-6 text-center text-base font-bold leading-snug text-app-gray-200">
                  Faça login para deixar sua avaliação
                </Dialog.Title>

                <LoginButton
                  as={Link}
                  onClick={handleApplyRedirectRoute}
                  href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}`}
                >
                  <GoogleIcon />
                  <span>Entrar com Google</span>
                </LoginButton>

                <LoginButton
                  as={Link}
                  onClick={handleApplyRedirectRoute}
                  href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
                >
                  <GitHubIcon />
                  <span>Entrar com GitHub</span>
                </LoginButton>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
