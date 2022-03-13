import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

// All data is in constants folder
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);

  // learn about useRef
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  // prevent default because I dont want the page to be refreshed
  // function accepts the event and index as param.
  //if carouselRef exist once we click it scroll left
  // Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
  //is a value that works best for scrolling left depending on the specific width
  //of that specific element
  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  //get the index based on the specific scroll and set the active item based on how far we`ve scrolled
  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  //on desktop device width there is no scroll/only on mobile device
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a open-minded, agile, and creative person who started coding to
        discover and build new great things. I can pick up complex concepts
        quickly and I'm a highly motivated, self-driven learner, currently
        completing a 3-month full-stack web development Bootcamp with the School
        of Code. My current language is JavaScript.I have gained experience
        working remotely in teams of great diversity, having worked on a
        week-long project using agile methodologies. As well as this, I have
        experience practicing test-driven development, using Jest and React
        Testing Library for unit testing, Supertest, and Postman for API
        testing, and Cypress for end-to-end testing. I have extensive experience
        in React.js and particularly enjoy working in this area, using
        libraries, tools, and frameworks such as Styled-Components, Next.js,
        Auth0, Storybook, and Netlify for deployment. Additionally, I've
        implemented multiple back-end (RESTful) solutions, creating APIs with
        the Express.js library using Node.js. I've created many databases using
        PostgreSQL and SQL++, deploying on Heroku and Couchbase respectively.
        Other tools I have used include; styling using CSS modules, Git for
        version control, Figma for designing wireframes, VS Code as an IDE, and
        Slack, Zoom, and Microsoft Teams as communication channels. If you would
        like to see some of my work and find out a bit more about me, please
        visit:<a href="https://github.com/Ilie1985"> GitHub </a> or click to see
        my Portfolio :
        <a href="https://marians-portfolio.netlify.app"> Portfolio </a>. In
        previous roles, I have shown my ability to be customer-focused, to work
        under pressure to meet targets, and to communicate with co-workers of
        all backgrounds and abilities.. Overall, I have effective communication
        skills, love to learn, and have a positive outlook. I like spending time
        , computational thinking comes naturally to me. I work efficiently in a
        team using agile framework and iterative approach to develop, test and
        deploy software.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {/* loop over the time line data */}
        {/* create an empty react fragment */}
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel_item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {item.year}

                  {/* carouselitemimg is an svg img ,nice scroll on mobile device width*/}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>
                  {/* render what i`ve done in that specific year` */}
                  {item.text}
                </CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>

      {/* loop over all the buttons and display a button for each timeline data*/}
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          // pass the values inside CarouselButton
          <CarouselButton
            key={index}
            index={index}
            //pass active value to know which value is item is active
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
