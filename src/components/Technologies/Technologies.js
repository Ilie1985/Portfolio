import React from "react";
//import icons
import { DiFirebase, DiJavascript, DiReact, DiZend } from "react-icons/di";
//import global components
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
//import local components
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I`ve worked with a range of technologies in the web development world.
      Front-End, Back-end, UI/UX, Agyle Methodology.
    </SectionText>
    <List>
      <ListItem>
        {/*React logo */}
        <DiReact size="3rem" />

        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js,Javascript,CSS3, HTML5,Netlify
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        {/* FireBase logo */}
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJs,PostreSQL,Heroku
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        {/* Zend logo  */}
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
