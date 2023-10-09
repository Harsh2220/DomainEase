import { response } from "@/app/search/page";
import useAppState, { useModalStore } from "@/store/store";
import formatAddress from "@/utils/formatAdress";
import React from "react";

export function ArbIcon() {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <rect width="52" height="52" rx="8" fill="#1A71B1"></rect>
      <g clip-path="url(#ic-arb-rect_svg__a)">
        <path
          d="M41.678 34.369 29.693 13.316c-1.646-2.887-5.751-2.887-7.378 0L10.33 34.369c-1.646 2.887.407 6.48 3.698 6.48H38c3.272 0 5.305-3.593 3.679-6.48Zm-7.706-2.573a4.15 4.15 0 0 1-2.034 3.574l-3.891 2.279c-.62.353-1.317.55-2.033.55a4.103 4.103 0 0 1-2.034-.55L20.09 35.37c-1.259-.726-2.033-2.101-2.033-3.574V27.22a4.15 4.15 0 0 1 2.033-3.574l3.872-2.278a4.103 4.103 0 0 1 2.033-.55c.717 0 1.414.196 2.033.55l3.892 2.278c1.259.726 2.033 2.101 2.033 3.574v4.576h.02Z"
          fill="#fff"
        ></path>
        <path
          d="M31.456 27.22c0-.57-.29-1.08-.775-1.355l-3.911-2.278a1.535 1.535 0 0 0-.774-.216c-.271 0-.543.079-.775.216l-3.892 2.278a1.563 1.563 0 0 0-.774 1.355v4.576c0 .57.29 1.08.774 1.355l3.892 2.278c.232.138.503.216.774.216.272 0 .543-.078.775-.216l3.892-2.278c.484-.275.774-.805.774-1.355V27.22h.02Z"
          fill="#F1F1F1"
        ></path>
      </g>
      <defs>
        <clipPath id="ic-arb-rect_svg__a">
          <path
            fill="#fff"
            transform="translate(9.75 11.15)"
            d="M0 0h32.5v29.699H0z"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ArbCard({
  name,
  data,
}: {
  name: string;
  data: response;
}) {
  const { setSelectedDomain } = useAppState();
  const {toggle } = useModalStore();
  return (
    <div className="flex items-center justify-between md:max-w-lg mx-auto">
      <div className="flex items-center">
        <ArbIcon />
        <h3 className="text-lg font-semibold ml-2">{name}.arb</h3>
      </div>
      {data.address === "0x0000000000000000000000000000000000000000" ? (
        <button
          className="inline-block px-4 py-2 text-xs font-medium tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
          onClick={() => {
            toggle()
            setSelectedDomain({
              address: data?.address,
              code: data?.code,
              domainName: name+".arb",
            });
          }}
        >
          Buy now
        </button>
      ) : (
        <div className="flex items-center">
          <h4 className="text-md font-medium ml-4">Owned by</h4>
          <h3 className="ml-2">{formatAddress(data?.address)}</h3>
        </div>
      )}
    </div>
  );
}
