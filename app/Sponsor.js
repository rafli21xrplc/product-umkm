import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="py-16 bg-white w-full">
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
          <div className="p-4">
            <Image
              className="mx-auto"
              src={"Shopee.svg"}
              alt="Image Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="p-4 flex items-center">
            <Image
              className="mx-auto"
              src={"Tokopedia.svg"}
              alt="Image Logo"
              width={200}
              height={200}
            />
          </div>
          <div className="p-4 flex items-center">
            <Image
              className="mx-auto"
              src={"Lazada.svg"}
              alt="Image Logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
