import classNames from "classnames";

interface InputIconButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export function InputIconButton({
  className,
  ...props
}: InputIconButtonProps): JSX.Element | null {
  return (
    <button
      className={classNames(
        "h-full text-app-gray-500 transition-colors first:pl-5 first:pr-1 last:pl-1 last:pr-5 hover:text-app-gray-600",
        className,
      )}
      {...props}
    />
  );
}
