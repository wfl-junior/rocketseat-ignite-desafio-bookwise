interface CheckIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function CheckIcon({
  size = 24,
  ...props
}: CheckIconProps): JSX.Element | null {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.78 6.22a.75.75 0 010 1.06l-10.5 10.5a.75.75 0 01-1.06 0l-5.25-5.25a.75.75 0 111.06-1.06l4.72 4.72 9.97-9.97a.75.75 0 011.06 0z"
        fill="currentColor"
      />
    </svg>
  );
}
