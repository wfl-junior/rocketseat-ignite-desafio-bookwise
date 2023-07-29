interface BooksIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function BooksIcon({
  size = 32,
  ...props
}: BooksIconProps): JSX.Element | null {
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
        d="M4 6a2 2 0 012-2h4a2 2 0 012 2v20a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm6 0H6v20h4V6z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 10a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6a2 2 0 012-2h4a2 2 0 012 2v20a2 2 0 01-2 2h-4a2 2 0 01-2-2V6zm6 0h-4v20h4V6z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 22a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zM16.382 7.203a2.008 2.008 0 011.42-2.46l3.88-1.04a2.008 2.008 0 012.46 1.42l5.2 19.4a2.008 2.008 0 01-1.42 2.46l-3.88 1.04a2.009 2.009 0 01-2.46-1.42l-5.2-19.4zm5.82-1.56l-3.88 1.04 5.2 19.4 3.88-1.04-5.2-19.4z"
        fill="currentColor"
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.165 20.577a1 1 0 01-.705 1.226l-5.8 1.563a1 1 0 01-.52-1.932l5.8-1.562a1 1 0 011.225.705zM25.066 8.992a1 1 0 01-.708 1.224l-5.8 1.55a1 1 0 11-.516-1.932l5.8-1.55a1 1 0 011.224.708z"
        fill="currentColor"
      />
    </svg>
  );
}
