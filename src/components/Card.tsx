import { fetchData } from "@/_lib/fetchData";
import {
  blogDescription,
  blogTag,
  blogTitle,
  ResultNotFound,
  userProfileName,
} from "@/app/fonts";
import { Article } from "@/_lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "/public/error.svg";

async function Card({ query }: { query?: string }) {
  let articles: Article[] = [];

  console.log(query);

  if (query == undefined) {
    articles = await fetchData("https://dev.to/api/articles/latest");
  } else {
    articles = await fetchData(`https://dev.to/api/articles?tag=${query}`);
  }

  if (articles.length < 1) {
    return (
      <div className="h-[50dvh] flex justify-center max-sm:items-center">
        <div className="flex flex-col items-center">
          <Image src={Icon} height={1000} width={1000} alt="icon" unoptimized/>
          <h1
            className={`${ResultNotFound.className} max-sm:text-3xl text-5xl`}
          >
            Result Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center  gap-10 max-xl:justify-center max-lg:gap-5 ">
        {articles.map((article) => {
          return (
            <Link
              href={`/${article.id}`}
              className="h-[auto] w-96 flex flex-col justify-between items-start max-sm:w-[21rem] rounded-xl bg-[#1A1F26] p-3"
              key={article.id}
              title={article.title}
            >
              <div
                className="flex flex-wrap items-center gap-3"
                style={{ fontSize: "12px", color: "#a3a2a2" }}
              >
                <Image
                  src={article.user.profile_image_90}
                  width={40}
                  height={40}
                  unoptimized
                  alt={article.user.name}
                  className={` h-10 w-10 bg-gray-400 rounded-full`}
                />
                <span className={`${userProfileName.className}`}>
                  {article.user.name}
                </span>
              </div>
             
              <h1 className={`${blogTitle.className}  text-xl my-5 max-sm:my-3`}>
                {article.title}
              </h1>
              {article.tag_list.length > 0 ? (
                <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 ">
                  {article.tag_list.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className={`${blogTag.className} h-7 w-[auto] rounded-md px-3 py-1 text-xs`}
                        style={{
                          border: "1px solid #656C7D",
                          color: "#656C7D",
                        }}
                      >
                        # {tag}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <span
                  className={`${blogDescription.className} text-sm`}
                  style={{
                    color: "#656C7D",
                  }}
                >
                  {article.description}
                </span>
              )}
            
              <br />
              <div className="w-full">
              <span className="text-xs text-gray-300 font-normal">Today</span>
              {article?.cover_image !== null ? (
                <Image
                  src={article?.cover_image}
                  width={600}
                  height={400}
                  alt={article?.title}
                  unoptimized
                  className="h-48 w-full rounded-lg bg-gray-400 my-5"
                />
              ) : (
                <div className="h-48 w-full rounded-lg bg-gray-700 my-5 animate-pulse"></div>
              )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
