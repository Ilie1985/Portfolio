import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  A,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        {/* Got to find out if I can transform the <a> and the <span> in a component to style it, i just gave it a try and it works  */}

        {/* <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:"20px"}}> </a> */}

        <A>
          {/* import the portfolio icon */}
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </A>
      </Link>
    </Div1>
    {/* Create navigation bar */}
    <Div2>
      <li>
        {/* This is going to make possible the scrole in the projects section of our app */}
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        {/* This is going to make possible the scrole in the technologies section of our app */}
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        {/* This is going to make possible the scrole in the about section of our app */}
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        {/* This is th github icon */}
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        {/* This is th linkedin icon */}
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        {/* This is th instagram icon */}
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
