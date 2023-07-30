import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-20 w-full backdrop-blur navbar shadow-2xl peer-checked:navbar-active dark:shadow-none">
      <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-5">
          <div className="w-full items-center flex justify-between lg:w-auto">
            <a className="relative z-10" href="/" aria-label="logo">
              {/* <Image 
                src={""}
                /> */}
              JAMUKU
            </a>
          </div>
          <div className="w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 rounded-3xl shadow-2xl  lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
            <div className="text-slate-500 w-full space-y-2 flex flex-col gap-3 -ml-1 sm:flex-row lg:space-y-0 md:w-max">
              <div className="items-center hidden space-x-8 lg:flex">
                <a
                  className="flex text-gray-600 hover:text-yellow-500
                    cursor-pointer transition-colors duration-300"
                >
                  Produk
                </a>

                <a
                  className="flex text-gray-600
                    cursor-pointer transition-colors duration-300 hover:text-yellow-600"
                >
                  Tentang
                </a>

                <a
                  className="flex text-gray-600 hover:text-yellow-500
                    cursor-pointer transition-colors duration-300"
                >
                  Kontak
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
