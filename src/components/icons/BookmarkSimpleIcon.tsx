interface BookmarkSimpleIconProps
  extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function BookmarkSimpleIcon({
  size = 32,
  ...props
}: BookmarkSimpleIconProps): JSX.Element | null {
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
        d="M7.586 5.086A2 2 0 019 4.5h14a2 2 0 012 2v22a1 1 0 01-1.53.848L16 24.679l-7.47 4.669A1 1 0 017 28.5v-22a2 2 0 01.586-1.414zM23 6.5H9v20.196l6.47-4.044a1 1 0 011.06 0L23 26.696V6.5z"
        fill="currentColor"
      />
    </svg>
  );
}
