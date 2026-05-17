import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const session = await auth();

  if (!session || !session.user?.id) {
    redirect("/api/auth/signin");
  }

  const portfolio = await prisma.portfolio.findUnique({
    where: { userId: session.user.id },
    include: {
      galleries: true,
      bookings: true,
    }
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>

      {!portfolio ? (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Welcome! Let&apos;s get started.</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">You haven&apos;t set up your portfolio yet.</p>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Create Portfolio
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Galleries</h3>
            <p className="text-3xl font-bold mt-2">{portfolio.galleries.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Bookings</h3>
            <p className="text-3xl font-bold mt-2">{portfolio.bookings.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Views</h3>
            <p className="text-3xl font-bold mt-2">--</p>
          </div>
        </div>
      )}
    </div>
  );
}