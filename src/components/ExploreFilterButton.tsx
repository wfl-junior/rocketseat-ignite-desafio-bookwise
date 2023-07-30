"use client";

import classNames from "classnames";
import { useState } from "react";

interface ExploreFilterButtonProps {
  label: string;
}

export function ExploreFilterButton({
  label,
}: ExploreFilterButtonProps): JSX.Element | null {
  const [isActive, setIsActive] = useState(false);

  function handleToggleActive() {
    setIsActive(currentIsActive => !currentIsActive);
  }

  return (
    <button
      onClick={handleToggleActive}
      className={classNames(
        "whitespace-nowrap rounded-full border px-4 py-1 text-base font-normal transition-colors",
        isActive
          ? "border-app-purple-200 bg-app-purple-200 text-app-gray-100 hover:border-app-purple-100 hover:bg-app-purple-100"
          : "border-app-purple-100 text-app-purple-100 hover:border-app-green-100 hover:text-app-green-100",
      )}
    >
      {label}
    </button>
  );
}
