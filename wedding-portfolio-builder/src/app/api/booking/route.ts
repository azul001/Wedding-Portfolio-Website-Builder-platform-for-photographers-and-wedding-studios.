import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { portfolioId, customerName, customerEmail, eventDate, eventType, details } = body;

    if (!portfolioId || !customerName || !customerEmail || !eventDate || !eventType) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const booking = await prisma.booking.create({
      data: {
        portfolioId,
        customerName,
        customerEmail,
        eventDate: new Date(eventDate),
        eventType,
        details
      }
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}