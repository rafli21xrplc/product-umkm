import Image from "next/image";

export default function Header() {
  return (
    <div>
      <section>
        <div className="container flex flex-col items-center px-5 lg:py-24 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
            <span className="mb-4 text-5xl tracking-tighter text-black md:text-5xl">
              Medium length display headline.
            </span>
            <p className="mb-8 font-light leading-relaxed text-left text-stone-400">
              Deploy your mvp in minutes, not days. WT offers you a a wide
              selection swapable sections for your landing page.
            </p>
            <div className="flex flex-col w-full gap-2 md:justify-start md:flex-row">
              <input
                className="shadow-xl flex-grow w-full px-4 py-3 mb-4 text-base text-black transition ease-in-out transform rounded-lg  duration-650 lg:w-auto bg-blueGray-200 focus:outline-none focus:border-purple-500 sm:mb-0 focus:bg-white focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                placeholder="Your Email"
                type="email"
              />
              <button className="shadow-lg shadow-yellow-600/50 flex items-center px-6 py-3 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-yellow-500 rounded-lg  hover:bg-yellow-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full mx-auto flex justify-center lg:w-5/6 lg:max-w-lg md:w-1/2">
            <Image
              className="object-cover object-center rounded-lg"
              alt="hero"
              src="/produkHeader.jpeg"
              width={400}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
