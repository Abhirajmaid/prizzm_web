export const revalidate = 0;

import { getGalleryPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";

const GalleryData = [
  {
    url : "/images/1.jpg"
  },
  {
    url : "/images/2.jpg"
  },
  {
    url : "/images/3.jpg"
  },
  {
    url : "/images/5.jpeg"
  },
  {
    url : "/images/6.jpg"
  },
  {
    url : "/images/projectB/1.jpg"
  },
  {
    url : "/images/projectB/2.jpg"
  },
  {
    url : "/images/projectB/3.jpg"
  },
  {
    url : "/images/projectB/4.jpg"
  },
  {
    url : "/images/projectB/5.jpg"
  },
  {
    url : "/images/projectB/6.jpg"
  },
  {
    url : "/images/projectB/7.jpg"
  },
  {
    url : "/images/projectD/6.jpg"
  },
  {
    url : "/images/projectC/6.jpg"
  },
  {
    url : "/images/projectC/5.jpg"
  },
  {
    url : "/images/projectC/4.jpg"
  },
  {
    url : "/images/projectD/2.jpg"
  },
  {
    url : "/images/projectC/1.jpg"
  },
]

const randomColumns = () => {
  const columnSize = [
    "sm:row-span-1",
    "sm:col-span-3 row-span-1",
    "col-span-1 sm:row-span-2",
  ];
  const randomIndex = Math.floor(Math.random() * columnSize.length);

  return columnSize[randomIndex];
};
const GalleryPage = async () => {
  const data = await getGalleryPage();
  const { Gallery } = data;

  return (
    <section
      id="section"
      className="py-24 overflow-hidden sm:py-24 relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <h1 className="text-white text-6xl font-bebas">Gallery</h1>
        <span className="text-white text-base font-bold italic">
          Our Entire works are showcased here.
        </span>
        <div className="grid-cols-1 grid-flow-row-dense gap-6 sm:grid-cols-2 md:grid-cols-4 grid">
          {GalleryData.map((image: ImageType, index: number) => {
            return (
              <div key={index} className={randomColumns()}>
                <Link href="/">
                  <Image
                    src={image.url}
                    alt=""
                    width={820}
                    height={440}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
