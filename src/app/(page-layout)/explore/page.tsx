import type { Metadata } from "next";
import { PageTitle } from "~/components/PageTitle";
import { BinocularsIcon } from "~/components/icons/BinocularsIcon";

export const metadata: Metadata = {
  title: "Explorar | BookWise",
};

interface ExploreProps {}

function Explore({}: ExploreProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle icon={BinocularsIcon} heading="Explorar" />
    </div>
  );
}

export default Explore;
