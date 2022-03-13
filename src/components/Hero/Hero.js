import React from "react";
// Importing some style global components from - styles/GlobalComponents
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

//Import LeftSection form the Herostyles.js
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  // Section Accepts 2 different props-> row and nopadding
  <Section row nopadding>
    <LeftSection>
      {/* SectionTitle props are -> main and center */}
      <SectionTitle main center>
        {/* Welcome To <br /> */}
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio! It is such a pleasure to have you here and an
        honour to introduce my work to you! I have spent the last three months,
        throughout School of Code, creating various pieces of work and building
        up my portfolio to where it is today; updating my display of projects as
        my skills have grown and developed. I hope you enjoy it! 
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
