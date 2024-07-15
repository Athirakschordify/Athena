import React from "react";

function Page() {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat pb-40"
      style={{
        backgroundImage: "url('/hero_two.jpg')",
        minHeight: "100vh",
      }}
    >
      <div className="text-white text-center px-6 md:px-12 lg:px-24 py-10">
        <div className="artist-names font-serif space-y-8 md:space-y-14">
          <p className="text-4xl md:text-5xl">Michelangelo</p>
          <p className="text-4xl md:text-5xl">Donatello</p>
          <p className="text-4xl md:text-5xl">Da Vinci</p>
          <p className="text-4xl md:text-5xl">Raphael</p>
          <p className="text-4xl md:text-5xl">Rubens</p>
          <p className="text-4xl md:text-5xl">Picasso</p>
          <p className="text-4xl md:text-5xl">Dali</p>
          <p className="text-4xl md:text-5xl">Miró</p>
          <p className="text-4xl md:text-5xl">Monet</p>
          <p className="text-4xl md:text-5xl">Modigliani</p>
          <p className="text-4xl md:text-5xl">Warhol</p>
          <p className="text-4xl md:text-5xl">Rothko</p>
          <p className="text-4xl md:text-5xl">De Kooning</p>
          <p className="text-sm md:text-xl max-w-2xl mt-4">
            Works by these artists are currently under option, contract, or in
            negotiation to form the foundation of our digital currency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
