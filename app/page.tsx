import workingImg from "@/assets/images/illustration-working.svg";
import ShorteningField from "@/components/ShorteningField";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-32">
      <Image
        src={workingImg}
        alt="hero"
        className="w-full h-full md:max-w-4xl md:mx-auto"
      ></Image>

      <div className="flex flex-col justify-center items-center text-center space-y-8 mt-14">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl">More than just shorter links</h1>
          <p className="text-gray-400 text-xl">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>
        </div>
        <Link
          href={"#"}
          className="bg-teal-400 py-5 px-14 rounded-full cursor-pointer text-white font-bold text-xl hover:bg-teal-600"
        >
          Get Started
        </Link>
      </div>

      <ShorteningField />
    </div>
  );
}
