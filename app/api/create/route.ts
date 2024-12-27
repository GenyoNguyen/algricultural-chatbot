import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { clerkClient } from "@clerk/clerk-sdk-node";
import { Sender } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await clerkClient.users.getUser(userId);
    const { message } = await req.json();
    console.log(message);

    const existingUser = await db.user.findUnique({
      where: {
        id: userId,
        name: user.fullName!,
        email: user.primaryEmailAddress?.emailAddress,
      },
    });

    if (!existingUser) {
      const newUser = await db.user.create({
        data: {
          id: userId,
          name: user.fullName!,
          email: user.primaryEmailAddress!.emailAddress,
        },
      });
      console.log(newUser);
    }

    const newMessage = await db.message.create({
      data: {
        from: Sender.USER,
        content: message,
        chat: {
          create: {
            title: "Lmao",
            user: {
              connect: {
                id: userId,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(newMessage, { status: 200 });
  } catch (error: unknown) {
    console.log("[MESSAGE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
