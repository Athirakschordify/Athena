import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 bg-black dark:bg-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        {/* First Column */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 dark:bg-gray-800 p-4 flex flex-col items-start space-y-6 px-10">
          {/* Content for first column */}
          <div className="text-white font-semibold text-2xl">
            Athena Art Digital AG
          </div>
          <div className="text-white mb-4">
            <p>Baarerstrasse 12</p>
            <p>6300 Zug</p>
            <p>Switzerland</p>
          </div>
          <div className="text-white text-center">
            <p>CHE-248.820.190</p>
          </div>
        </div>

        {/* Second Column - Contact Us Button */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 dark:bg-gray-800 p-4 flex items-start justify-center">
          <div className="w-full md:w-auto">
            <Button
              variant="solid"
              className="text-black bg-white px-8 py-4 md:px-10 md:py-6 text-2xl w-full md:w-auto h-16 md:h-20"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 dark:bg-black p-4 md:pl-10 lg:pl-20 flex flex-col space-y-6 items-start">
          <div className="text-white">
            <Link href="#" className="text-white" prefetch={false}>
              Terms of Service
            </Link>
          </div>
          <div className="text-white mb-4">
            <Link href="#" className="text-white" prefetch={false}>
              Data Protection
            </Link>
          </div>
          <div className="text-white">
            <Link href="#" className="text-white" prefetch={false}>
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
