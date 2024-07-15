import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-12 bg-black dark:bg-zinc-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <div className="col-span-1 md:col-span-3 lg:col-span-1 dark:bg-gray-800 p-4 flex flex-col items-start space-y-6 px-10">
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

        <div className="col-span-1 md:col-span-2 lg:col-span-1 dark:bg-gray-800 p-4 flex items-start justify-center">
          <div className="w-full md:w-auto">
            <Button
              variant="solid"
              className="text-black bg-white px-6 py-2 md:px-8 md:py-4 text-xl w-full md:w-auto h-14 md:h-18"
            >
              Contact Us
            </Button>
          </div>
        </div>

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
