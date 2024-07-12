import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Component() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero_one.jpg')" }}
    >
      <div className="flex items-center justify-between px-4 py-6 bg-black bg-opacity-50">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logo.png" alt="Logo" width={200} height={150} />
        </Link>
        <div className="hidden md:flex gap-10">
          <Link
            href="#"
            className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
            prefetch={false}
          >
            The Token
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
            prefetch={false}
          >
            The Team
          </Link>
          <Link
            href="#"
            className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
            prefetch={false}
          >
            Contact
          </Link>
        </div>

        <Sheet>
          <div className="md:hidden">
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
              >
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent side="left" className=" bg-black">
            <div className="grid w-[500px] p-10">
              {/* Links for mobile view */}
              <div className="flex flex-col gap-16">
                <Link
                  href="#"
                  className="flex items-center gap-2"
                  prefetch={false}
                >
                  <Image src="/logo.png" alt="Logo" width={150} height={150} />
                </Link>
                <Link
                  href="#"
                  className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
                  prefetch={false}
                >
                  The Token
                </Link>
                <Link
                  href="#"
                  className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
                  prefetch={false}
                >
                  The Team
                </Link>
                <Link
                  href="#"
                  className="text-[16px] leading-[1.6px] text-white font-sm no-underline hover:no-underline"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center h-full px-8 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <h1
            className={`text-white ${merriweather.className} text-center text-[25px] md:text-left lg:text-[44.8px] md:text-[30px] sm:text-[30px]`}
          >
            Welcome to the world’s first digital currency backed by the cultural
            legacy of humanity’s greatest artists.
          </h1>
        </div>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
