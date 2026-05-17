import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const portfolio = await prisma.portfolio.findUnique({
      where: { userId: session.user.id },
      include: {
        galleries: true,
        albums: true,
        bookings: true,
        testimonials: true
      }
    });

    if (!portfolio) {
      return NextResponse.json({ error: "Portfolio not found" }, { status: 404 });
    }

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, domain } = body;

    const portfolio = await prisma.portfolio.create({
      data: {
        userId: session.user.id,
        title,
        description,
        domain
      }
    });

    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
    try {
      const session = await auth();
      if (!session || !session.user?.id) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const body = await req.json();
      const { title, description, domain } = body;

      const portfolio = await prisma.portfolio.update({
        where: { userId: session.user.id },
        data: {
          title,
          description,
          domain
        }
      });

      return NextResponse.json(portfolio);
    } catch (error) {
      console.error("Error updating portfolio:", error);
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}