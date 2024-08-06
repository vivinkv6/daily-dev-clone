import Card from "@/components/Card";
import Image from "next/image";
import plus from "/public/plus.svg";
import filter from "/public/filter.svg";
import SkeletonCard from "@/components/Skeleton";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  console.log(searchParams?.query);

  return (
    <WrapComponent>
      <div className="flex flex-col">
        <div className="w-[100%] p-16 max-sm:p-3 flex flex-row justify-between">
          <div className="flex gap-2  items-center bg-[#1A1F26] rounded-md px-2 py-2">
            <Image src={filter} width={30} height={30} alt="Filter Icon" unoptimized />
            <span className="font-semibold text-[#A3AEC9] text-sm">
              Feed Settings
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={plus} width={30} height={30} alt="Plus Icon" unoptimized />
            <span className="font-semibold text-[#A3AEC9] text-sm">
              Add Shortcuts
            </span>
          </div>
        </div>

        <Suspense fallback={<SkeletonCard />}>
          {searchParams?.query ? (
            <Card query={searchParams?.query} />
          ) : (
            <Card query={searchParams?.query} />
          )}
        </Suspense>
      </div>
    </WrapComponent>
  );
}

function WrapComponent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b border-gray-700">
        <Navbar />
      </header>
      {children}
    </>
  );
}
