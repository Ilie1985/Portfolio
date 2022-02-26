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
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
