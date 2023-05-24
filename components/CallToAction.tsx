import Link from "next/link";

function CallToAction() {
  return (
    <div className="bg-violet-950 w-full">
      <div className="py-20 px-10 text-center text-white flex flex-col space-y-4">
        <h1 className="font-bold text-2xl">Boost your links today</h1>
        <Link
          href="#"
          className="bg-teal-500 py-3 px-10 w-auto mx-auto rounded-full hover:bg-teal-300 font-bold"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
