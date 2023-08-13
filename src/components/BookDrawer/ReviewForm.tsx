"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { User } from "~/database/schemas/users";
import { Avatar } from "../Avatar";
import { CheckIcon } from "../icons/CheckIcon";
import { CircleNotchIcon } from "../icons/CircleNotchIcon";
import { StarFillIcon } from "../icons/StarFillIcon";
import { StarOutlineIcon } from "../icons/StarOutlineIcon";
import { XIcon } from "../icons/XIcon";

const maxStars = 5;
const maxTextLength = 450;

const validationSchema = z.object({
  stars: z
    .number()
    .min(1, "Mínimo de 1 estrela")
    .max(maxStars, `Máximo de ${maxStars} estrelas`),
  text: z
    .string({ required_error: "A avaliação é obrigatória" })
    .min(1, "A avaliação é obrigatória")
    .max(
      maxTextLength,
      `A avaliação deve conter no máximo ${maxTextLength} caracteres`,
    ),
});

type FormValues = z.infer<typeof validationSchema>;

interface ReviewFormProps {
  user: User;
}

export function ReviewForm({ user }: ReviewFormProps): JSX.Element | null {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      stars: 0,
      text: "",
    },
  });

  const handleAddReview = handleSubmit(values => {
    console.log(values);
  });

  function handleClear() {
    reset();
  }

  return (
    <form onSubmit={handleAddReview} className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <Avatar size={40} user={user} />

        <strong className="text-base font-bold leading-snug text-app-gray-100">
          {user.name}
        </strong>

        <Controller
          name="stars"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <div className="ml-auto flex flex-col items-end gap-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: maxStars }).map((_, index) => {
                  const iteration = index + 1;
                  const Icon =
                    iteration > value ? StarOutlineIcon : StarFillIcon;

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => onChange(iteration)}
                      className="text-app-purple-100 transition-colors hover:text-app-purple-200"
                    >
                      <Icon size={28} />
                    </button>
                  );
                })}
              </div>

              {error?.message ? (
                <span className="text-sm font-medium text-app-red-500">
                  {error.message}
                </span>
              ) : null}
            </div>
          )}
        />
      </div>

      <Controller
        name="text"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className="flex flex-col gap-1">
            <div className="relative">
              <textarea
                value={value}
                placeholder="Escreva sua avaliação"
                onChange={event => onChange(event.target.value)}
                className="mt-3 h-40 w-full resize-none overflow-y-auto rounded border-2 border-app-gray-500 bg-app-gray-800 px-5 pb-4 pt-3.5 text-sm font-normal leading-relaxed text-app-gray-200 scrollbar-thin scrollbar-track-app-gray-600 scrollbar-thumb-app-gray-700 placeholder:text-app-gray-400 focus:border-app-green-200 focus:outline-none"
              />

              <span
                className={classNames(
                  "absolute bottom-3 right-3 text-xs font-normal",
                  value.length > maxTextLength
                    ? "text-app-red-500"
                    : "text-app-gray-400",
                )}
              >
                {value.length}/{maxTextLength}
              </span>
            </div>

            {error?.message ? (
              <span className="text-sm font-medium text-app-red-500">
                {error.message}
              </span>
            ) : null}
          </div>
        )}
      />

      <div className="flex justify-end gap-2">
        <button
          type="reset"
          onClick={handleClear}
          className="rounded bg-app-gray-600 p-2 text-app-purple-100 transition-colors hover:text-app-green-100"
        >
          <XIcon size={24} />
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-app-gray-600 p-2 text-app-green-100 transition-colors hover:enabled:text-app-purple-100 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <CircleNotchIcon size={24} className="animate-spin" />
          ) : (
            <CheckIcon size={24} />
          )}
        </button>
      </div>
    </form>
  );
}
