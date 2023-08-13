interface XIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function XIcon({ size = 24, ...props }: XIconProps): JSX.Element | null {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.28 4.72a.75.75 0 010 1.06l-13.5 13.5a.75.75 0 01-1.06-1.06l13.5-13.5a.75.75 0 011.06 0z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.72 4.72a.75.75 0 011.06 0l13.5 13.5a.75.75 0 11-1.06 1.06L4.72 5.78a.75.75 0 010-1.06z"
        fill="currentColor"
      />
    </svg>
  );
}
