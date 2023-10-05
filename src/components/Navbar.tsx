"use client";

import React from "react";
import CustomConnectButton from "./CustomConnectButton";

export default function Navbar() {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between pt-6 -m-2">
        <div className="w-auto p-2">
          <div className="flex flex-wrap items-center">
            <div className="w-auto">
              <a className="relative z-10 inline-block" href="#">
                <img
                  src="https://static.shuffle.dev/components/preview/5ea0a962-b8d0-47f5-bcf4-9267b70a0086/assets/public/nightsable-assets/logos/logo.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <CustomConnectButton />
      </div>
    </div>
  );
}
