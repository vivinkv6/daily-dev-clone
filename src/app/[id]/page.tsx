import { fetchData } from "@/_lib/fetchData";
import { Article } from "@/_lib/type";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import {
  blogDescription,
  blogTag,
  blogTitle,
  userProfileName,
} from "@/app/fonts";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const article: Article = await fetchData(
    `https://dev.to/api/articles/${params.id}`
  );
  return {
    title: article.title,
    description: article.description,
    authors: [
      {
        name: article.user.name,
        url:
          article.user.website_url !== null
            ? article.user.website_url
            : `https://www.github.com/${article.user.github_username}`,
      },
    ],
  };
};

async function BlogDetail({ params }: { params: { id: string } }) {
  const article: Article = await fetchData(
    `https://dev.to/api/articles/${params.id}`
  );

  return (
    <div className="flex flex-wrap justify-evenly">
      <div>
        <div className="flex max-lg:flex-wrap gap-x-10 justify-between">
          {article.cover_image !== null && (
            <Image
              src={article.cover_image}
              width={500}
              height={500}
              unoptimized
              alt={article.title}
              className="max-lg:w-full bg-gray-500 h-96 max-sm:w-11/12 max-sm:rounded-lg max-sm:h-52 w-8/12 rounded-xl"
            />
          )}
          <div>
            <h1
              className={`${blogTitle.className} max-sm:text-[25px] max-sm:w-72 text-3xl font-semibold my-5`}
            >
              {article.title}
            </h1>
            <div className="flex flex-row flex-wrap gap-x-5 my-5">
              {(Array.isArray(article.tags) ? article.tags : []).map(
                (tag: string) => {
                  return (
                    <span
                      key={tag}
                      className={`${blogTag.className} h-7 w-[auto] rounded-md px-3 py-1 text-xs `}
                      style={{
                        border: "1px solid #656C7D",
                        color: "#656C7D",
                      }}
                    >
                      # {tag}
                    </span>
                  );
                }
              )}
            </div>
            <div className="my-5 flex items-center gap-3 max-sm:hidden">
              <Image
                src={article.user.profile_image_90}
                width={50}
                height={50}
                unoptimized
                alt={article.title}
                className="rounded-full"
              />
              <span
                className={`${userProfileName.className} max-sm:text-[13px] max-xl:text-lg  text-gray-400`}
              >
                {article.user.name}
              </span>
            </div>
            <p
              className={`${blogDescription.className} my-10 text-gray-300 max-sm:w-96`}
            >
              {article.description}
            </p>
          </div>
        </div>

        {article.body_html && (
          <div
            dangerouslySetInnerHTML={{ __html: article.body_html }}
            className={`${blogDescription.className} my-10 text-gray-300 max-sm:w-11/12`}
          ></div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;
