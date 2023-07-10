import { PageTitle } from "~/components/PageTitle";
import { ChartLineUpIcon } from "~/components/icons/ChartLineUpIcon";

interface HomeProps {}

function Home({}: HomeProps): JSX.Element | null {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle icon={ChartLineUpIcon} heading="Início" />
    </div>
  );
}

export default Home;
