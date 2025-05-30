import { SidebarInset, SidebarProvider, SidebarTrigger } from "./sidebar";
import AppSidebar from "./app-sidebar";

export interface WrapperProps {
  children: React.ReactNode;
  onLogout?: () => void;
}

const Wrapper = ({ children, onLogout = () => {} }: WrapperProps) => {
  return (
    <SidebarProvider>
      <AppSidebar onLogout={onLogout} />
      <div className="flex flex-col w-full">
        <SidebarInset>
          <header className="flex items-center px-4 h-12">
            <SidebarTrigger className="cursor-pointer" />
          </header>
        </SidebarInset>
        <main className="h-full p-4 bg-gray-200">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Wrapper;
