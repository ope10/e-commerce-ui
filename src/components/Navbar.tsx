import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Home, ShoppingCart, Bell } from "lucide-react";
import ShoppingCarticon from "./ShoppingCarticon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4   ">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="TrenLama"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />
        <p className="hidden md:block text-md font-medium tracking-wider">
          TRENDLAMA
        </p>
      </Link>
      {/* RIGHT */}
      <div className="flex item-center gap-6 ">
        <SearchBar />
        <Link href="/">
          <Home className="w-6 h-6 text-gray-600" />
        </Link>
        <Bell className="w-6 h-6 text-gray-600" />

        <ShoppingCarticon />

        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
