import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { ChatHistory } from "./chat-history";

export async function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex flex-row gap-3 items-center">
          <span className="text-lg font-semibold px-2 hover:bg-muted rounded-md cursor-pointer">
            Algricultural Chatbot
          </span>{" "}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <ChatHistory />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
