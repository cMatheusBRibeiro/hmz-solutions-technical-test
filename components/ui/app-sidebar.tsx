import Link from "next/link";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./sidebar";

export interface AppSidebarProps {
  onLogout?: () => void;
}

const AppSidebar = ({ onLogout = () => {} }: AppSidebarProps) => {
  const logout = () => {
    localStorage.removeItem("teste-tecnico-token");
    onLogout();
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center h-12 px-4">
        <h3>SUPPLY CHAIN</h3>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between h-full">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/">
                    <span>Usuários</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" onClick={logout}>
                    <span>Sair</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
