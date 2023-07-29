interface UserListIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function UserListIcon({
  size = 32,
  ...props
}: UserListIconProps): JSX.Element | null {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9a4 4 0 100 8 4 4 0 000-8zm-6 4a6 6 0 1112 0 6 6 0 01-12 0zM18 10a1 1 0 011-1h12a1 1 0 110 2H19a1 1 0 01-1-1zM18 16a1 1 0 011-1h12a1 1 0 110 2H19a1 1 0 01-1-1zM21 22a1 1 0 011-1h9a1 1 0 110 2h-9a1 1 0 01-1-1z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18.984a7 7 0 00-6.781 5.264 1 1 0 01-1.938-.496 9 9 0 0117.438 0 1 1 0 01-1.938.496 7 7 0 00-6.78-5.264z"
        fill="currentColor"
      />
    </svg>
  );
}
