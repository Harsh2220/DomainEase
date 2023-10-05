"use client";

import ArbCard from "@/components/ArbCard";
import BnbCard from "@/components/BnbCard";
import checkarb from "@/utils/checkarb";
import checkbnb from "@/utils/checkbnb";
import React from "react";

export type response = {
  code: number;
  address: string;
};

export default function Search() {
  const [name, setName] = React.useState<string | null>(null);
  const [previousName, setPreviousName] = React.useState<string | null>(null);
  const [bnbStatus, setBnbStatus] = React.useState<response | null>(null);
  const [arbStatus, setArbStatus] = React.useState<response | null>(null);

  async function checkDomains() {
    const bnbData = await checkbnb(name!);
    const arbData = await checkarb(name!);

    if (bnbData.code === 0) {
      setBnbStatus(bnbData);
    }

    if (arbData.code === 0) {
      setArbStatus(arbData);
    }

    setPreviousName(name);
  }

  return (
    <section className="relative pt-24 pb-28 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="mb-12 max-w-lg mx-auto font-heading font-bold text-center text-6xl sm:text-6xl text-white">
          Hard to believe? Analyze your website
        </h2>
        <div className="mb-9 md:max-w-lg mx-auto">
          <div className="p-1 flex flex-col md:flex-row bg-white overflow-hidden rounded-md">
            <input
              className="block flex-1 px-5 py-4 md:py-0 text-base text-gray-500 bg-transparent outline-none placeholder-gray-500 rounded-tl-xl rounded-bl-xl"
              type="text"
              placeholder="Enter a name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="group relative font-heading font-semibold w-full md:w-auto py-5 px-8 text-xs text-white bg-gray-900 uppercase overflow-hidden rounded-md tracking-px"
              onClick={checkDomains}
            >
              <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full transition ease-in-out duration-500 bg-gradient-fuchsia"></div>
              <p className="relative z-10">Search Now</p>
            </button>
          </div>
        </div>
      </div>
      {bnbStatus && (
        <div className="mt-4">
          <BnbCard name={previousName!} data={bnbStatus} />
        </div>
      )}
      {arbStatus && (
        <div className="mt-4">
          <ArbCard name={previousName!} data={arbStatus} />
        </div>
      )}
    </section>
  );
}
