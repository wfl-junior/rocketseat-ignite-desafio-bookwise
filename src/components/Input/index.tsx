import classNames from "classnames";
import { InputIconButton } from "./InputIconButton";
import { InputRoot } from "./InputRoot";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {}

export function Input({ className, ...props }: InputProps): JSX.Element | null {
  return (
    <input
      className={classNames(
        "flex-1 bg-transparent py-3.5 text-app-gray-200 placeholder:text-app-gray-400 first:pl-5 first:pr-1 last:pl-1 last:pr-5 only:px-5 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

Input.Root = InputRoot;
Input.IconButton = InputIconButton;
