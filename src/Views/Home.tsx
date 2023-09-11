import * as React from "react";
import ProductHelp from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductDescription from "./modules/views/ProductDescription";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductCTA from "./modules/views/ProductCTA";
import AppAppBar from "./modules/views/AppAppBar";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductDescription />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductHelp />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
