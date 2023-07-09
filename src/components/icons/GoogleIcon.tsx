interface GoogleIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export function GoogleIcon({
  size = 32,
  ...props
}: GoogleIconProps): JSX.Element | null {
  return (
    <svg
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_526_69)">
        <path
          d="M31.252 16.3c0-1.312-.106-2.268-.336-3.26h-14.97v5.917h8.787c-.178 1.47-1.134 3.685-3.26 5.173l-.03.198 4.733 3.667.328.033c3.012-2.782 4.748-6.874 4.748-11.729z"
          fill="#4285F4"
        />

        <path
          d="M15.945 31.89c4.305 0 7.92-1.417 10.56-3.862l-5.032-3.898c-1.347.94-3.154 1.595-5.528 1.595-4.216 0-7.795-2.782-9.07-6.626l-.188.015-4.922 3.81-.064.178c2.622 5.21 8.008 8.788 14.244 8.788z"
          fill="#34A853"
        />

        <path
          d="M6.874 19.099a9.816 9.816 0 01-.531-3.154c0-1.098.194-2.162.513-3.154l-.009-.21L1.864 8.71l-.163.077A15.96 15.96 0 000 15.945c0 2.569.62 4.996 1.7 7.157L6.875 19.1z"
          fill="#FBBC05"
        />

        <path
          d="M15.945 6.165c2.994 0 5.014 1.294 6.165 2.374l4.5-4.393C23.847 1.576 20.25 0 15.945 0 9.71 0 4.323 3.579 1.701 8.787l5.155 4.004c1.294-3.844 4.873-6.626 9.09-6.626z"
          fill="#EB4335"
        />
      </g>

      <defs>
        <clipPath id="clip0_526_69">
          <path fill="#fff" d="M0 0H32V32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
