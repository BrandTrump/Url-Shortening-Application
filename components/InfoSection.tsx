import InfoCard from "./InfoCard";

function InfoSection() {
  return (
    <div className="mt-20 pb-20 w-5/6 mx-auto">
      <div className="flex flex-col space-y-4 text-center lg:w-1/2 mx-auto lg:pb-10">
        <h1 className="font-bold text-4xl">Advanced Statistics</h1>
        <p className="text-gray-500 text-lg">
          Track how your links are preforming across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="mt-20 relative w-full">
        <div className="bg-teal-400 w-2 h-full absolute top-0 left-1/2 -translate-x-1/2 lg:h-2 lg:top-1/2 lg:right-0 lg:-translate-x-0 lg:left-0 lg:w-full"></div>
        <div className="flex flex-col space-y-20 lg:flex-row lg:space-x-4 lg:space-y-0">
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
