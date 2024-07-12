import React from "react";
import NavBar from "../components/navbar/page";
import HeroOne from "../components/hero_one/page";
import HeroTwo from "../components/hero_two/page";
import Footer from "../components/footer/page";

function page() {
  return (
    <div>
      <NavBar />
      <HeroOne />
      <HeroTwo />
      <Footer />
    </div>
  );
}

export default page;
