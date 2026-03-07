import AsideLayout from "@/components/layout/AsideLayout";
import HeaderLayout from "@/components/layout/HeaderLayout";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <HeaderLayout className="flex items-center justify-center m-10 gap-10" />
      <div className="flex">
        <AsideLayout className="w-1/5" />
        <div className="w-4/5">{children}</div>
      </div>
    </div>
  );
}
