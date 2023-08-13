import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { User } from "~/database/schemas/users";
import { Avatar } from "./Avatar";
import { BookStars } from "./BookStars";

dayjs.locale("pt-br");
dayjs.extend(relativeTime);

interface BookDetailsReviewCardProps {
  text: string;
  stars: number;
  isSelf?: boolean;
  createdAt: string;
  user: Pick<User, "id" | "name" | "avatarUrl">;
}

export function BookDetailsReviewCard({
  text,
  user,
  stars,
  isSelf,
  createdAt,
}: BookDetailsReviewCardProps): JSX.Element | null {
  return (
    <div
      className={classNames(
        "flex flex-col gap-5 rounded-lg p-6",
        isSelf ? "bg-app-gray-600" : "bg-app-gray-700",
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar size={40} user={user} />

        <div className="flex flex-col">
          <strong className="text-base font-bold leading-snug text-app-gray-100">
            {user.name}
          </strong>

          <span className="text-sm font-normal leading-relaxed text-app-gray-400">
            {dayjs(createdAt).fromNow()}
          </span>
        </div>

        <div className="ml-auto">
          <BookStars stars={stars} />
        </div>
      </div>

      <p className="text-sm font-normal leading-relaxed text-app-gray-300">
        {text}
      </p>
    </div>
  );
}
