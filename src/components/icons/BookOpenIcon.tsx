interface BookOpenIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function BookOpenIcon({
  size = 32,
  ...props
}: BookOpenIconProps): JSX.Element | null {
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
        d="M20 8a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 015-5h8a2 2 0 012 2v16a2 2 0 01-2 2h-8a3 3 0 00-3 3 1 1 0 11-2 0 5 5 0 015-5h8V8h-8z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.586 6.586A2 2 0 014 6h8a5 5 0 015 5v18a1 1 0 11-2 0 3 3 0 00-3-3H4a2 2 0 01-2-2V8a2 2 0 01.586-1.414zM15 25V11a3 3 0 00-3-3H4v16h8a5 5 0 013 1z"
        fill="currentColor"
      />
    </svg>
  );
}
