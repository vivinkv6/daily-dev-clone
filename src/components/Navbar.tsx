"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
//assets
import logo from "/public/logo.svg";
import name from "/public/name.svg";
import searchIcon from "/public/search.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import debounce from "debounce";

function Navbar() {
  const [search, setSearch] = useState<string>("");
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearch(query);
    debouncedSearch(query);
  };

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      const params = new URLSearchParams(window.location.search);
      params.set("query", query);
      router.replace(`${window.location.pathname}?${params.toString()}`);
    }, 500), // Adjust the debounce delay as needed
    []
  );

  const submitQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    const params = new URLSearchParams(window.location.search);
    params.set("query", search);
    router.replace(`${window.location.pathname}?${params.toString()}`);
    const res = await fetch(`https://dev.to/api/articles?tag=${search}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="flex flex-row justify-between items-center p-5 max-sm:px-0 max-sm:py-5">
      <Link href={"/"} className="flex flex-row items-center gap-2">
        <Image
          src={logo}
          height={30}
          width={30}
          unoptimized
          alt="Logo"
          className="max-sm:hidden"
        />
        <Image src={name} height={40} unoptimized width={80} alt="Daily. Dev" />
      </Link>
      <div>
        <form
          onSubmit={submitQuery}
          method="post"
          className="w-96 h-12 max-sm:hidden bg-[#1c1f26] rounded-xl flex justify-between items-center p-2"
        >
          <Image src={searchIcon} height={30} unoptimized width={30} alt="Search icon" />
          <input
            type="text"
            name="query"
            className="placeholder:text-gray-400 bg-[#1c1f26] focus:outline-none"
            value={search}
            onChange={handleInputChange}
            placeholder="Search..."
            onClick={() => {
              const input = document.querySelector("input");
              if (input) {
                input.placeholder = "Search for post or ask...";
              }
            }}
            onBlur={() => {
              const input = document.querySelector("input");
              if (input) {
                input.placeholder = "Search...";
              }
            }}
          />
          <div className={`flex`}>
            <kbd
              className={`flex min-w-4 justify-center rounded border border-border-subtlest-tertiary bg-background-subtle px-1.5 py-0.5 font-sans text-text-tertiary text-xs`}
            >
              Ctrl
            </kbd>
            <span className={`mx-0.5 py-0.5 text-text-tertiary text-xs`}>
              +
            </span>
            <kbd
              className={`flex min-w-4 justify-center rounded border border-border-subtlest-tertiary bg-background-subtle px-1.5 py-0.5 font-sans text-text-tertiary text-xs`}
            >
              K
            </kbd>
          </div>
        </form>
        <div className="hidden max-sm:flex max-sm:items-center max-sm:gap-5">
          <Image
            src={searchIcon}
            height={40}
            width={40}
            unoptimized
            alt="Search icon"
            onClick={() => setIsMobileSearchVisible(!isMobileSearchVisible)}
          />

          {isMobileSearchVisible && (
            <form
              onSubmit={submitQuery}
              method="post"
              className="w-full h-12 bg-[#1c1f26] rounded-xl flex justify-between items-center p-2 mt-2"
            >
              <input
                type="text"
                name="query"
                className="placeholder:text-gray-400 bg-[#1c1f26] focus:outline-none w-full"
                value={search}
                onChange={handleInputChange}
                placeholder="Search..."
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
