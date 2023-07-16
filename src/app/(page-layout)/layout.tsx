import { Sidebar } from "~/components/Sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps): JSX.Element | null {
  return (
    <div className="flex flex-1">
      <Sidebar />

      <div className="mx-16 mt-18 flex flex-1 flex-col pl-[252px] 2xl:mx-24">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
