import { Calendar1, CalendarCheck, LayoutDashboard, MapPinned, NotebookPen, Tags, UsersRound } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Inquiries",
    url: "/inquiries",
    icon: NotebookPen,
  },
  {
    title: "Users",
    url: "/users",
    icon: UsersRound,
  },
  {
    title: "Locations",
    url: "/locations",
    icon: MapPinned,
  },
  {
    title: "Attributes",
    url: "/attributes",
    icon: Tags,
  },
  {
    title: "Event Types",
    url: "/events",
    icon: Calendar1,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: CalendarCheck,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md text-black mb-3">Inquiry Management System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}