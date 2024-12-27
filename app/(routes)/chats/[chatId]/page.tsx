import { ChatBody } from "./_components/chat-body";
import { ChatForm } from "./_components/chat-form";

const ChatIdPage = async ({ params }: { params: { chatId: string } }) => {
  return (
    <div className="h-full flex flex-col">
      <ChatBody />
      <ChatForm conversationId={params.chatId} />
    </div>
  );
};

export default ChatIdPage;
