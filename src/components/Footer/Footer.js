import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Linkedin</LinkTitle>
          <LinkItem href="tel:111-111-1111">
            Phone No. available uppon request
          </LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href="mailto:contact@iliemarian32@gmail.com">
            contact@iliemarian32@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Inovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
