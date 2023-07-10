interface ChartLineUpIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function ChartLineUpIcon({
  size = 32,
  ...props
}: ChartLineUpIconProps): JSX.Element | null {
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
        d="M232 208a8 8 0 01-8 8H32a8 8 0 01-8-8V48a8 8 0 0116 0v108.69l50.34-50.35a8 8 0 0111.32 0L128 132.69 180.69 80H160a8 8 0 010-16h40a8 8 0 018 8v40a8 8 0 01-16 0V91.31l-58.34 58.35a8 8 0 01-11.32 0L96 123.31l-56 56V200h184a8 8 0 018 8z"
      />
    </svg>
  );
}
