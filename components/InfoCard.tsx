function InfoCard() {
  return (
    <div className="bg-white relative rounded-md md:h-full md:p-2 lg:p-4 shadow-md">
      <div className="bg-violet-950 h-24 w-24 left-1/2 -top-12 absolute rounded-full -translate-x-1/2 lg:left-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-teal-500 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      </div>
      <div className="p-8 pt-20 text-center flex flex-col space-y-4 md:text-start">
        <h1 className="font-bold text-2xl">Brand Recognition</h1>
        <p className="text-gray-500 text-lg">
          Boost your brand recognition with each click. Genertic links
          don&apos;t mean a thing. Branded links help instil confidence in your
          content.
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
