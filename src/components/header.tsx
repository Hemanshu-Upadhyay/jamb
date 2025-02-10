import Link from "next/link";
import { Mail, Search, Menu } from "lucide-react";
// import Image from "next/image";

export function Header() {
  return (
    <header className="fixed con top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            {/* If you enable the logo, ensure correct sizing */}
            {/* <Image src="/logo.png" alt="Logo" width={40} height={40} /> */}
            <h1 className="text-2xl sm:text-3xl tracking-tight text-gray-900">
              Jamb.
            </h1>
          </Link>

          <div className="flex items-center gap-2 sm:gap-6 text-[#9C9C9D]">
            <button className="p-2 rounded-lg transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </button>

            <button className="p-2 rounded-lg transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Contact</span>
            </button>

            <button className="p-2 rounded-lg transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
