interface SignOutIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function SignOutIcon({
  size = 32,
  ...props
}: SignOutIconProps): JSX.Element | null {
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
        d="M112 216a8 8 0 01-8 8H48a16 16 0 01-16-16V48a16 16 0 0116-16h56a8 8 0 010 16H48v160h56a8 8 0 018 8zm109.66-93.66l-40-40a8 8 0 00-11.32 11.32L196.69 120H104a8 8 0 000 16h92.69l-26.35 26.34a8 8 0 0011.32 11.32l40-40a8 8 0 000-11.32z"
      />
    </svg>
  );
}
