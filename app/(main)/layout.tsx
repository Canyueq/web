import AsideLayout from "@/components/layout/AsideLayout";
import HeaderLayout from "@/components/layout/HeaderLayout";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col"></div>
      <HeaderLayout className={"shrink-0"} />
      <div className="flex">
        <Sidebar></Sidebar>
        <div className="w-4/5">{children}</div>
      </div>
    </SidebarProvider>
  );
}
