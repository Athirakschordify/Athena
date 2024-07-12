import React from "react";

function Page() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="text-black text-4xl md:text-8xl font-bold mt-2 text-center px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
          <div>
            <img
              src="/athena.png"
              alt="Image"
              className="w-24 md:w-48 h-24 md:h-48 object-contain"
            />
          </div>
          <div className="text-3xl md:text-7xl font-bold">Secure. Stable. Liquid.</div>
          <div className="text-base md:text-lg text-center max-w-3xl font-medium">
            Imagine having access to an asset-backed digital currency that can
            not just hedge against inflation but also appreciate in value.
          </div>

          <div>
            <button className="bg-[#253551] hover:bg-[#253554] text-white text-lg md:text-xl py-4 md:py-6 px-12 md:px-20 rounded">
              Why Athena
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
