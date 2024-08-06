import React from "react";

export default function SkeletonCard() {
  return (
    <div className="flex flex-wrap justify-center w-full">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="h-auto w-full max-w-[384px] rounded-xl bg-[#1A1F26] p-3"
          >
            <div className="flex flex-wrap items-center gap-3 animate-pulse">
              <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
              <div className="h-3 w-20 bg-gray-700 rounded-2xl"></div>
            </div>
            <div className="h-5 w-full bg-gray-700 rounded-lg my-3 animate-pulse"></div>
            <div className="h-5 w-full bg-gray-700 rounded-lg mb-5 animate-pulse"></div>
            <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 animate-pulse">
              {[...Array(3)].map((_, tagIndex) => (
                <span
                  key={tagIndex}
                  className="h-7 w-16 rounded-md"
                  style={{
                    border: "1px solid #656C7D",
                    backgroundColor: "#656C7D",
                  }}
                ></span>
              ))}
            </div>

            <div className="h-48 w-full rounded-lg bg-gray-700 my-5 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BlogDetailSkeleton() {
  return (
    <div className="flex flex-wrap justify-evenly animate-pulse border border-gray-700 rounded-lg p-6">
      <div className="w-full">
        <div className="flex max-lg:flex-wrap gap-x-10 justify-between">
          <div className="max-lg:w-full bg-gray-700 h-96 max-sm:w-11/12 max-sm:rounded-lg max-sm:h-52 w-8/12 rounded-xl animate-pulse"></div>
          <div className="w-full lg:w-4/12">
            <div className="h-8 bg-gray-700 rounded max-sm:w-72 w-full my-5 animate-pulse"></div>
            <div className="flex flex-row flex-wrap gap-x-5 my-5">
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-7 w-20 rounded-md animate-pulse"
                  style={{
                    backgroundColor: "#656C7D",
                  }}
                ></span>
              ))}
            </div>
            <div className="my-5 flex items-center gap-3 max-sm:hidden">
              <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-4 w-32 bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="space-y-2 my-10">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="h-4 bg-gray-700 rounded max-sm:w-96 w-full animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10">
          {[...Array(15)].map((_, index) => (
            <div key={index} className="h-4 bg-gray-700 rounded w-full my-2  animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
