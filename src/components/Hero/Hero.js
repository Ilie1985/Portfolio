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
        Welcome to Hollie Arnett Design and welcome to my portfolio! It is such
        a pleasure to have you here and an honour to introduce my work to you,
        so thank you for reading! I have spent the last seven years, throughout
        high school and university and my own freelance career, creating various
        pieces of work and building up my portfolio to where it is today;
        updating my display of projects as my skills have grown and developed. I
        hope you enjoy it! As I introduce my portfolio and you explore it for
        yourself if you want to, you will notice that I have worked with a lot
        of design mediums, exploring both print and web projects, and working in
        areas from branding to user interfaces to advertising and even more. I
        love how design can be used in so many different formats and mediums to
        portray similar content in various ways in order to provide a unique
        user experience, and I am super interested in the way that print and web
        can work together in cool ways, so I am always flicking between them and
        intertwining them together! Within my portfolio I also include work that
        has been created for various purposes, whether it be from university
        projects, commissioned freelance work, volunteer design or personal
        pieces of work, so you will see lots of different types of work is
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
