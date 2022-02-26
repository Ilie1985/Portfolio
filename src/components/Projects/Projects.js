import React from "react";
//import components from ProjectStyles
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
//import global components
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
//import  projects from constants
import { projects } from "../../constants/constants";

const Projects = () => (
  // give a nopadding prop and id
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>

    {/* .map over the projects in constants -is where we keep the data to separate the content from the logic- 
     the GridContainer will position the .map results where I want on the page */}
    <GridContainer>
      {/* Destructure id,image,title,description,tags, source,visit from project */}
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title={title}>
                <Hr />
              </HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {/* .map over the components ,take the index from map*/}
                {/* use paranthesis ,not curly braces for an instant return */}
                {tags.map((tag, i) => (
                  // render a tag inside <Tag>
                  // use the index  as a key
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            {/* Render external links in <UtilityList/> */}
            <UtilityList>
              <ExternalLinks href={visit}>Code</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
