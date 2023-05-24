import Link from "next/link";

function Footer() {
  return (
    <div className="bg-slate-800 flex flex-col items-center justify-center p-20 text-center space-y-8 md:flex-row md:items-start md:space-y-0 md:justify-between md:flex-wrap">
      <h1 className="text-white font-bold text-4xl">Shortly</h1>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Features</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            Link Shortening
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Branded Links
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Analytics
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Resources</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            Blog
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Developers
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Support
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-white font-bold text-lg">Company</h2>
        <div className="text-gray-300 flex flex-col space-y-2">
          <Link href="#" className="hover:text-teal-500">
            About
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Our Team
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Careers
          </Link>
          <Link href="#" className="hover:text-teal-500">
            Contact
          </Link>
        </div>
      </div>

      <div className="text-white flex space-x-6">
        <Link href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 hover:text-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 hover:text-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 hover:text-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </Link>
        <Link href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-8 h-8 hover:text-teal-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
