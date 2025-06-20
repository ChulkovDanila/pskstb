'use client';

import Header from "@/components/header";
import Subheader from "@/components/subheader";
import Menu from "@/components/menu";
import Contact from "@/components/contact";
import AboutCompany from "@/components/aboutcompany";
import Production from "@/components/production";
import WhyUs from "@/components/whyus";
import Partners from "@/components/partners";
import News from "@/components/news";
import { useState } from "react";
import AboutUs from "@/components/aboutus";

export default function Home() {
  const [subheaderHidden, setSubheaderHidden] = useState(false);
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      <Subheader onHiddenChange={setSubheaderHidden} />
      <Header isSubheaderHidden={subheaderHidden} />
      <Menu isSubheaderHidden={subheaderHidden} />
      <div className="mt-40 w-full flex justify-center">
        <Contact />
      </div>
      <div className="mt-10 w-full">
        <WhyUs />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <AboutCompany />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <Production />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <News />
      </div>
      <div className="mt-10 w-full">
        <AboutUs />
      </div>
      <div className="mt-0 w-full">
        <Partners />
      </div>
    </main>
  );
}

