import { StarFillIcon } from "./icons/StarFillIcon";
import { StarOutlineIcon } from "./icons/StarOutlineIcon";

const maxStars = 5;

interface BookStarsProps {
  stars: number;
}

export function BookStars({ stars }: BookStarsProps): JSX.Element | null {
  return (
    <div className="flex items-center gap-1 text-app-purple-100">
      {Array.from({ length: maxStars }).map((_, index) => {
        const iteration = index + 1;
        const Icon = iteration > stars ? StarOutlineIcon : StarFillIcon;

        return <Icon key={index} size={16} />;
      })}
    </div>
  );
}
