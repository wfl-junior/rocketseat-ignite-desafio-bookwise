import classNames from "classnames";

type InputRootProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
  };

export function InputRoot<T extends React.ElementType = "div">({
  as,
  className,
  ...props
}: InputRootProps<T>): JSX.Element | null {
  const Component = as || "div";

  return (
    <Component
      className={classNames(
        "flex items-center rounded border-2 border-app-gray-500 bg-transparent transition-colors focus-within:border-app-green-200",
        className,
      )}
      {...props}
    />
  );
}
