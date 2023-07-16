import type { Metadata } from "next";
import { PageTitle } from "~/components/PageTitle";
import { ChartLineUpIcon } from "~/components/icons/ChartLineUpIcon";
import { PopularBooks } from "./PopularBooks";
import { RecentReviews } from "./RecentReviews";

export const metadata: Metadata = {
  title: "Home | BookWise",
};

interface HomeProps {}

function Home({}: HomeProps): JSX.Element | null {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <PageTitle icon={ChartLineUpIcon} heading="Início" />

      <div className="grid h-full grid-cols-[1fr_324px] gap-16">
        <RecentReviews />
        <PopularBooks />
      </div>
    </div>
  );
}

export default Home;
