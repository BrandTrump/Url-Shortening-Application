import workingImg from "@/assets/images/illustration-working.svg";
import ShorteningField from "@/components/ShorteningField";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="md:bg-white pb-20">
        <div className="pt-36 flex flex-col-reverse md:justify-between md:flex-row md:pb-20 md:items-center overflow-hidden md:space-x-20">
          <div className="flex flex-col justify-center items-center text-center space-y-8 mt-14 md:text-start md:items-start">
            <div className="space-y-4">
              <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
                More than just shorter links
              </h1>
              <p className="text-gray-400 text-xl lg:text-2xl">
                Build your brand&apos;s recognition and get detailed insights on
                how your links are performing.
              </p>
            </div>
            <Link
              href={"#"}
              className="bg-teal-400 py-5 px-14 rounded-full cursor-pointer text-white font-bold text-xl hover:bg-teal-200"
            >
              Get Started
            </Link>
          </div>

          <div className="overflow-hidden w-full md:max-w-4xl md:scale-110">
            <Image
              src={workingImg}
              alt="hero"
              className="w-full h-full"
            ></Image>
          </div>
        </div>
      </div>
      <ShorteningField />
    </div>
  );
}
