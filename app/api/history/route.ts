import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chats = await db.chat.findMany({
      where: {
        userId,
      },
      orderBy: {
        time: "asc",
      },
    });

    return NextResponse.json(chats);
  } catch (error: unknown) {
    console.log("[HISTORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
