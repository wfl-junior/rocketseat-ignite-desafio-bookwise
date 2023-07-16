interface CaretLeftIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function CaretLeftIcon({
  size = 32,
  ...props
}: CaretLeftIconProps): JSX.Element | null {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M168.49 199.51a12 12 0 01-17 17l-80-80a12 12 0 010-17l80-80a12 12 0 0117 17L97 128z"
      />
    </svg>
  );
}
