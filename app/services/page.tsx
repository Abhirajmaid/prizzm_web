export const revalidate = 0;

import { SERVICES } from "@/constant/services";
import { ContentType, getServicesPage, ImageType } from "@/sanity/queries/page";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { GalleryData } from "../page";

const ServicesData = [
  {
    heading:"Interior Designs",
    excerpt : "Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    heading:"3D Designs",
    excerpt : "Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    heading:"Architecture Designs",
    excerpt : "Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
]

const ServicesPage = async () => {
  const data = await getServicesPage(SERVICES.PATH);

  const { Content, Heading, Gallery, CallToAction, Video, FormContact } = data;

  return (
    <section
      id="section"
      className="py-24  relative w-full justify-center flex items-center bg-black"
    >
      {" "}
      <div id="container" className=" px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>{Heading}</h1>
        </div>
        <div className="md:grid sm:grid-cols-2 xl:grid-cols-3 gap-3 grid grid-cols-1">
          {ServicesData.map((element: any, index: number) => {
            return (
              <div
                key={index}
                className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border"
              >
                <div>
                  <h2 className="text-xl font-bebas font-bold leading-none">
                    {element.heading}
                  </h2>
                </div>
                <div className="text-sm">{element.excerpt}</div>
                <Link
                  href="/contact-us"
                  className="text-white border-2 border-white py-3 font-bebas  text-xl text-x text-center hover:bg-white hover:text-black duration-300"
                >
                  Contact Us
                </Link>
              </div>
            );
          })}

          <div className="col-span-1 md:col-span-3">
            <Marquee className="h-full w-full" loop={50}>
              {GalleryData.map((image: ImageType, index: number) => {
                return (
                  <div className="h-[450px] aspect-auto w-full" key={index}>
                    <Image
                      src={image.url}
                      alt="Images"
                      width={450}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
