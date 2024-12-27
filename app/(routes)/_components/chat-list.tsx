"use client";

import { Chat } from "@prisma/client";
import { ChatItem } from "../../../components/chat-item";

interface ChatListProps {
  items: Chat[];
}

export const ChatList = ({ items }: ChatListProps) => {
  return (
    <div className="flex flex-col w-full">
      {items.map((item) => (
        <ChatItem key={item.id} title={item.title} href={`/chats/${item.id}`} />
      ))}
    </div>
  );
};
