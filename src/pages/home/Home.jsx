import React from "react";
import Layout from "../../commons/Layout";
import BrandSection from "./BrandSection";
import HeroSection from "./HeroSection";
import JumbotronSection from "./JumbotronSection";
import MyWudifySection from "./MyWudifySection";
import OurWordsSection from "./OurWordsSection";
import ProductSection from "./ProductSection";
import SubCategorySection from "./SubCategorySection";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <SubCategorySection  />
      <ProductSection />
      <JumbotronSection />
      <BrandSection />
      <MyWudifySection />
      <OurWordsSection />
    </Layout>
  );
}

export default Home;
