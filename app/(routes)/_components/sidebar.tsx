import getChats from "@/app/actions/getChats";
import { ChatList } from "./chat-list";
import { Logo } from "./logo";

export const Sidebar = async () => {
  const chats = await getChats();

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <ChatList items={chats} />
    </div>
  );
};
