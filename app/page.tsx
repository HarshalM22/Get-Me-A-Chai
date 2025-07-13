import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center text-white h-[44vh] ">
        <div className="font-bold text-5xl flex items-center justify-center">
          Buy Me A Chai{" "}
          <span>
            <Image src="/tea.gif" alt="tea gif" width={90} height={90} />
          </span>
        </div>
        <p>
          {" "}
          A crowdfunding platform for creators. Get funded by your fans and
          followers. Strat now!{" "}
        </p>
        <div className="gap-40">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Start Here
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>
    </>
  );
}
