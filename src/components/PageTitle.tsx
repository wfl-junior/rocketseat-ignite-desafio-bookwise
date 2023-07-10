import { ElementType } from "react";

interface PageTitleProps {
  heading: string;
  icon: ElementType;
}

export function PageTitle({
  heading,
  icon: Icon,
}: PageTitleProps): JSX.Element | null {
  return (
    <div className="flex items-center gap-3">
      <Icon size={32} className="text-app-green-100" />
      <h1 className="text-2xl font-bold">{heading}</h1>
    </div>
  );
}
