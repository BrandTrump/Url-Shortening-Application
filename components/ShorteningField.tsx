import bgMobile from "@/assets/images/bg-shorten-mobile.svg";

function ShorteningField() {
  return (
    <div className="bg-violet-950 w-96 mx-auto p-10 mt-20 rounded-xl">
      <form action="" className="flex flex-col space-y-8">
        <input
          type="text"
          className="rounded-md p-3"
          placeholder="Shorten a link here..."
        />
        <button
          type="submit"
          className="bg-teal-400 text-white font-bold p-3 rounded-md hover:bg-teal-600"
        >
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default ShorteningField;
