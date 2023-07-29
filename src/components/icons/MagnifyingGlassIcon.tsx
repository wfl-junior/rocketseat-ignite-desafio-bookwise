interface MagnifyingGlassIconProps
  extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function MagnifyingGlassIcon({
  size = 20,
  ...props
}: MagnifyingGlassIconProps): JSX.Element | null {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.063 3.125a5.938 5.938 0 100 11.875 5.938 5.938 0 000-11.875zM1.875 9.063a7.187 7.187 0 1114.375 0 7.187 7.187 0 01-14.375 0z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.261 13.261a.625.625 0 01.884 0l3.797 3.797a.625.625 0 11-.884.884l-3.797-3.797a.625.625 0 010-.884z"
        fill="currentColor"
      />
    </svg>
  );
}
