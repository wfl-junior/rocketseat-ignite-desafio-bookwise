import { Sidebar } from "~/components/Sidebar";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps): JSX.Element | null {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-24 mt-18 pl-[252px]">{children}</div>
    </div>
  );
}

export default PageLayout;
