import Link from "next/link";

export default function Post() {
  return <div className="w-full h-[70vh] items-center justify-center flex flex-col gap-5">
    <h1 className="text-3xl text-center">
      This is Search Page
    </h1>
    <p className="max-w-[300px] text-center">
      The Search functionality is currently unavailable.
    </p>
    <p className="max-w-[300px] text-center text-indigo-700">
      Sorry for the inconvenience
    </p>

    <Link href="/"
      className="bg-transparent hover:bg-indigo-300 text-indigo-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-300 hover:border-transparent">
      Go to Home
    </Link>
  </div>;
}