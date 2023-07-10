interface UserIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function UserIcon({
  size = 32,
  ...props
}: UserIconProps): JSX.Element | null {
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
        d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 10-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1013.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1013.85-8zM72 96a56 56 0 1156 56 56.06 56.06 0 01-56-56z"
      />
    </svg>
  );
}
