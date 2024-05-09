export const revalidate = 0;

import { getWorksPage, ImageType, ProjectType } from "@/sanity/queries/page";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const WorkData = [
  {
    projectname: "Project A",
    location: "Kharadi, Pune",
    url: "https://webfudgeagency.com",
    tagline: "Interior Design",
    imageUrls: ["/images/projectA/1.jpeg", "/images/projectA/2.jpeg","/images/projectA/3.jpeg", "/images/projectA/4.jpg", "/images/projectA/5.jpg", "/images/projectA/6.jpg"],
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  {
    projectname: "Project B",
    location: "Kharadi, Pune",
    url: "https://webfudgeagency.com",
    tagline: "Interior Design",
    imageUrls: ["/images/projectB/1.jpg", "/images/projectB/2.jpg","/images/projectB/3.jpg", "/images/projectB/4.jpg", "/images/projectB/5.jpg", "/images/projectB/6.jpg", "/images/projectB/7.jpg", "/images/projectB/8.jpg"],
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  {
    projectname: "Project C",
    location: "Kharadi, Pune",
    url: "https://webfudgeagency.com",
    tagline: "Interior Design",
    imageUrls: ["/images/projectC/1.jpg", "/images/projectC/2.jpg","/images/projectC/3.jpg", "/images/projectC/4.jpg", "/images/projectC/5.jpg", "/images/projectC/6.jpg", "/images/projectC/7.jpg", "/images/projectC/8.jpg","/images/projectC/9.jpg", "/images/projectC/10.jpg",],
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
  {
    projectname: "Project D",
    location: "Kharadi, Pune",
    url: "https://webfudgeagency.com",
    tagline: "Interior Design",
    imageUrls: ["/images/projectD/1.jpg", "/images/projectD/2.jpg","/images/projectD/3.jpg", "/images/projectD/4.jpg", "/images/projectD/5.jpg", "/images/projectD/6.jpg"],
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
  },
]

const WorksPage = async () => {
  const data = await getWorksPage();

  const { Content, Hero, CallToAction } = data;

  return (
    <React.Fragment>
      <section
        id="section"
        className="py-24 overflow-hidden sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <h1 className="text-white text-6xl font-bebas">{Hero.heading}</h1>
          <div className="w-full h-full aspect-video flex flex-col">
            <span className="text-md block italic font-bold text-white">
              {Hero.tagline}
            </span>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1"
              title="YouTube video player"
              allow="autoplay; muted;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit relative w-full justify-center flex flex-col items-center bg-black"
      >
        {WorkData.map((project: any, index: number) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={index}
              className={clsx(
                "sticky text-black overflow-hidden top-0 sm:h-[75vh] pb-24 shrink-0 w-full",
                index % 2 == 0 ? "bg-white text-black" : "bg-black text-white"
              )}
            >
              <div id="container" className="px-6 sm:px-24 w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 px-6 border-b-black">
                  <div className="">
                    <h3 className="text-3xl font-bebas">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-black border-black"
                            : "bg-black text-white border-white"
                        )}
                      >
                        {tagline}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col my-3 sm:my-0 sm:flex-row sm:justify-between">
                    <p>{excerpt}</p>
                    <Link
                      href="/"
                      target="_blank"
                      className={clsx(
                        "bg-black font-bebas w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ",
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:border-black hover:text-black"
                          : "bg-white text-black border-white hover:bg-black hover:border-white hover:text-white"
                      )}
                    >
                      See More
                    </Link>
                  </div>
                </div>
                <div className="relative flex -mx-[50%]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                  >
                    {imageUrls?.map((image: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[700px] aspect-video"
                        >
                          <Image
                            loading="lazy"
                            src={image || ""}
                            alt="Images"
                            width={700}
                            height={650}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}

        <div className="sticky text-black top-82 bg-slate-600 opacity-0 h-[600px] shrink-0 w-full"></div>
      </section>
      <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit h-screen relative w-full justify-center flex flex-col items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className="text-6xl text-white font-bebas leading-none max-w-96">
                {CallToAction.title}
              </h2>
              <Link
                href="/"
                className="px-6 font-bebas py-3 w-fit border-white border-2 text-xl hover:bg-white hover:text-black duration-300 text-white"
              >
                {CallToAction.label}
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WorksPage;
