interface BinocularsIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function BinocularsIcon({
  size = 32,
  ...props
}: BinocularsIconProps): JSX.Element | null {
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
        d="M237.2 151.87a47.1 47.1 0 00-2.35-5.45L193.26 51.8a7.82 7.82 0 00-1.66-2.44 32 32 0 00-45.26 0A8 8 0 00144 55v25h-32V55a8 8 0 00-2.34-5.66 32 32 0 00-45.26 0 7.82 7.82 0 00-1.66 2.44L21.15 146.4a47.1 47.1 0 00-2.35 5.45A48 48 0 10112 168V96h32v72a48 48 0 1093.2-16.13zM76.71 59.75a16 16 0 0119.29-1v73.51a47.9 47.9 0 00-46.79-9.92zM64 200a32 32 0 1132-32 32 32 0 01-32 32zm96-141.26a16 16 0 0119.29 1l27.5 62.58a47.9 47.9 0 00-46.79 9.93zM192 200a32 32 0 1132-32 32 32 0 01-32 32z"
      />
    </svg>
  );
}
