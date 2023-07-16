interface CaretRightIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function CaretRightIcon({
  size = 32,
  ...props
}: CaretRightIconProps): JSX.Element | null {
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
        d="M184.49 136.49l-80 80a12 12 0 01-17-17L159 128 87.51 56.49a12 12 0 1117-17l80 80a12 12 0 01-.02 17z"
      />
    </svg>
  );
}
