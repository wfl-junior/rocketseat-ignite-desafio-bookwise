interface StarFillIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function StarFillIcon({
  size = 32,
  ...props
}: StarFillIconProps): JSX.Element | null {
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
        d="M234.5 114.38l-45.1 39.36 13.51 58.6a16 16 0 01-23.84 17.34l-51.11-31-51 31a16 16 0 01-23.84-17.34l13.49-58.54-45.11-39.42a16 16 0 019.11-28.06l59.46-5.15 23.21-55.36a15.95 15.95 0 0129.44 0L166 81.17l59.44 5.15a16 16 0 019.11 28.06z"
      />
    </svg>
  );
}
