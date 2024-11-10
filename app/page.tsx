import { Outfit } from "next/font/google";

import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Call the font loader at the module scope
const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <div
        className={`text-white  relative mt-16 overflow-hidden flex flex-col items-center  gap-5 ${outfit.className}`}
      >
        <Hero/>
      
        <Footer/>
      </div>
    </>
  );
}
