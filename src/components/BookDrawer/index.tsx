"use client";

import FocusTrap from "focus-trap-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "~/database/schemas/users";
import { BookDetailsReviewCard } from "../BookDetailsReviewCard";
import { XIcon } from "../icons/XIcon";
import { BookDetails } from "./BookDetails";
import { LoginModal } from "./LoginModal";
import { ReviewForm } from "./ReviewForm";

interface BookDrawerProps {
  bookId: string;
  user: User | null;
}

export function BookDrawer({
  user,
  bookId,
}: BookDrawerProps): JSX.Element | null {
  const router = useRouter();
  const [isFocusTrapPaused, setIsFocusTrapPaused] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  function handleClose() {
    router.push("/explore");
  }

  return (
    <FocusTrap paused={isFocusTrapPaused}>
      <div>
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 cursor-default bg-black/60 backdrop-blur-xs"
        />

        <aside className="fixed inset-y-0 right-0 z-50 flex h-screen max-h-screen w-full max-w-[660px] flex-col gap-4 overflow-y-auto bg-app-gray-800 px-12 py-6 scrollbar-thin scrollbar-track-app-gray-600 scrollbar-thumb-app-gray-700">
          <button onClick={handleClose} title="Fechar" className="self-end">
            <XIcon size={24} className="text-app-gray-400" />
          </button>

          <BookDetails />

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-sm font-normal text-app-gray-200">
              Avaliações
            </span>

            {!user && (
              <LoginModal setIsFocusTrapPaused={setIsFocusTrapPaused} />
            )}
          </div>

          <div className="flex flex-col gap-3">
            {user ? <ReviewForm user={user} /> : null}

            <BookDetailsReviewCard
              createdAt="2023-07-16T12:00:00.000Z"
              text="Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhoansiuh"
              stars={5}
              user={{
                id: "1",
                avatarUrl: null,
                name: "Jaxson Dias",
              }}
            />

            <BookDetailsReviewCard
              createdAt="2023-07-15T12:00:00.000Z"
              text="Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget."
              stars={4}
              user={{
                id: "2",
                avatarUrl: null,
                name: "Brandon Botosh",
              }}
            />

            <BookDetailsReviewCard
              createdAt="2023-07-14T12:00:00.000Z"
              text="Integer at tincidunt sed mi. Venenatis nunc justo porta viverra lacus scelerisque ut orci ultricies. Massa ultrices lacus non lectus pellentesque cras posuere neque. Nunc nisl curabitur et non. Tellus senectus elit porta lorem."
              stars={4}
              user={{
                id: "3",
                avatarUrl: null,
                name: "Lindsey Philips",
              }}
            />
          </div>
        </aside>
      </div>
    </FocusTrap>
  );
}
