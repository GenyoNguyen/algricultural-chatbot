import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const getChats = async () => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return [];
    }

    const chats = db.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        time: "asc",
      },
    });

    return chats;
  } catch (error: unknown) {
    console.log("[GET_CHATS]", error);
    return [];
  }
};

export default getChats;
