interface CircleNotchIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function CircleNotchIcon({
  size = 24,
  ...props
}: CircleNotchIconProps): JSX.Element | null {
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
        d="M232 128a104 104 0 01-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 016.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 00176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 016.68-14.54C208.19 49.64 232 87 232 128z"
      />
    </svg>
  );
}
