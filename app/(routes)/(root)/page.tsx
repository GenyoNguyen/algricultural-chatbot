import EmptyState from "@/app/components/EmptyState";
import { ChatForm } from "../chats/[chatId]/_components/chat-form";

export default function ChatBox() {
  return (
    <div className="h-full flex flex-col">
      <EmptyState />
      <ChatForm />
    </div>
  );
}
