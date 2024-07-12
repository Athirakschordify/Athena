import React from "react";

function Page() {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat pb-40"
      style={{ 
        backgroundImage: "url('/hero_two.jpg')",
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      <div className="text-white text-center px-6 md:px-12 lg:px-24 py-10">
        <div className="artist-names font-serif space-y-8 md:space-y-14">
          <p className="text-4xl md:text-7xl">Michelangelo</p>
          <p className="text-4xl md:text-7xl">Donatello</p>
          <p className="text-4xl md:text-7xl">Da Vinci</p>
          <p className="text-4xl md:text-7xl">Raphael</p>
          <p className="text-4xl md:text-7xl">Rubens</p>
          <p className="text-4xl md:text-7xl">Picasso</p>
          <p className="text-4xl md:text-7xl">Dali</p>
          <p className="text-4xl md:text-7xl">Miró</p>
          <p className="text-4xl md:text-7xl">Monet</p>
          <p className="text-4xl md:text-7xl">Modigliani</p>
          <p className="text-4xl md:text-7xl">Warhol</p>
          <p className="text-4xl md:text-7xl">Rothko</p>
          <p className="text-4xl md:text-7xl">De Kooning</p>
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
