import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 flex flex-col">
      <header className="border-b border-gray-200 dark:border-gray-800 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-tighter">Lens & Vows</h1>
        <nav className="space-x-4">
          <Link href="/api/auth/signin" className="text-sm font-medium hover:underline">
            Login
          </Link>
          <Link href="/api/auth/signin">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-balance">
            Crafting the Perfect Wedding Portfolio
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            The ultimate website builder designed specifically for wedding photographers. Create beautiful, high-converting portfolios in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/api/auth/signin">
               <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">Start Free Trial</Button>
            </Link>
            <Link href="#features">
               <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6">View Templates</Button>
            </Link>
          </div>
        </div>
      </main>

      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold">Everything you need to showcase your art.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold">1</div>
              <h4 className="text-xl font-semibold">Drag & Drop Builder</h4>
              <p className="text-gray-500 dark:text-gray-400">Easily customize your portfolio without writing a single line of code. Choose from luxury templates.</p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold">2</div>
              <h4 className="text-xl font-semibold">Client Booking System</h4>
              <p className="text-gray-500 dark:text-gray-400">Built-in CRM to manage inquiries, check availability, and secure bookings directly from your site.</p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-xl font-bold">3</div>
              <h4 className="text-xl font-semibold">High-Res Galleries</h4>
              <p className="text-gray-500 dark:text-gray-400">Optimized image delivery, masonry layouts, and fullscreen lightboxes to let your photos shine.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>&copy; {new Date().getFullYear()} Lens & Vows. All rights reserved.</p>
      </footer>
    </div>
  );
}