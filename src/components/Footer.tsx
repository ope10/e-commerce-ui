import  Link  from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center ">
          <Image src="/logo.png" alt="TrenLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider">
            TRENDLAMA
          </p>
        </Link>
        <p className="text-sm text-gray-400">o 2025 Trendlama</p>
        <p className="text-sm text-gray-400">All right reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text:sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/login">Homepage</Link>
        <Link href="/login">Contact</Link>
        <Link href="/login">Privacy Policy</Link>
        <Link href="/login">Terms of Service</Link>
      </div>
      <div className="flex flex-col gap-4 text:sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/login">Homepage</Link>
        <Link href="/login">Contact</Link>
        <Link href="/login">Privacy Policy</Link>
        <Link href="/login">Terms of Service</Link>
      </div>
      <div className="flex flex-col gap-4 text:sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/login">Homepage</Link>
        <Link href="/login">Contact</Link>
        <Link href="/login">Privacy Policy</Link>
        <Link href="/login">Terms of Service</Link>
      </div>
    </div>
  );
};

export default Footer;
