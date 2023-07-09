import classNames from "classnames";

interface LoginButtonProps<T extends React.ElementType = "button"> {
  as?: T;
  children: React.ReactNode;
}

export function LoginButton<T extends React.ElementType = "button">({
  as,
  children,
  className,
  ...props
}: LoginButtonProps<T> &
  Omit<
    React.ComponentPropsWithoutRef<T>,
    keyof LoginButtonProps<T>
  >): JSX.Element | null {
  const Component = as || "button";

  return (
    <Component
      className={classNames(
        "flex w-full items-center gap-5 rounded-lg bg-app-gray-600 px-6 py-5 text-base font-bold text-app-gray-200 transition-colors hover:bg-app-gray-500 sm:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
