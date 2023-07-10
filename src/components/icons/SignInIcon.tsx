interface SignInIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function SignInIcon({
  size = 32,
  ...props
}: SignInIconProps): JSX.Element | null {
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
        d="M141.66 133.66l-40 40a8 8 0 01-11.32-11.32L116.69 136H24a8 8 0 010-16h92.69L90.34 93.66a8 8 0 0111.32-11.32l40 40a8 8 0 010 11.32zM192 32h-56a8 8 0 000 16h56v160h-56a8 8 0 000 16h56a16 16 0 0016-16V48a16 16 0 00-16-16z"
      />
    </svg>
  );
}
