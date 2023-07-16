import { BackButton } from "~/components/BackButton";
import { BookWiseCoverLayout } from "~/components/BookWiseCoverLayout";

interface NotFoundProps {}

function NotFound({}: NotFoundProps): JSX.Element | null {
  return (
    <BookWiseCoverLayout>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-center text-2xl font-bold">
          Página não encontrada
        </h1>

        <BackButton />
      </div>
    </BookWiseCoverLayout>
  );
}

export default NotFound;
