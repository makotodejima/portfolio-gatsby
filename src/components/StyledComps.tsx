import styled, { css, CSSObject, SimpleInterpolation } from "styled-components";
import Img, { GatsbyImageFluidProps } from "gatsby-image";

export const sizes: { [key: string]: number } = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media: any = Object.keys(sizes).reduce(
  (acc: { [key: string]: any }, label) => {
    acc[label] = (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(first, ...interpolations)}
      }
    `;
    return acc;
  },
  {},
);

// Index
export const Label = styled.div`
  font-size: 1.25rem;
  margin: 0 0 2rem;
  a {
    float: right;
    padding-top: 4px;
    text-align: right;
    font-size: 0.9rem;
    text-decoration: underline;
    color: ${(props) => props.theme.secondary};
    &:hover {
      opacity: 0.7;
    }
  }
`;

// Index and Work top
export const WorksListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  @media (max-width: 375px) {
  }
`;

export const PageTitle = styled.h2`
  margin: 2rem 0 4rem;
`;

// Across work pages

export const TopCoverColor = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  background-color: ${(props) =>
    props.theme.isDarkMode ? props.theme.bg : props.color};
  transition: background-color 500ms;
  width: 100%;
  height: 400px;

  ${media.phone`
  height: 240px;
  `}
`;

export const TopSection = styled.div`
  margin-bottom: 3rem;
  ${media.phone`
  margin-bottom: 0;
  `}
`;

export const TopImage = styled(Img)<{ width?: string } & GatsbyImageFluidProps>`
  width: ${(props) => props.width || `50%`};
  margin: 40px auto 5rem;
  box-shadow: ${(props) => props.theme.workImgBoxShadow};
`;

export const ExtLink = styled.div`
  text-align: center;
  margin: 3.4rem auto;

  a {
    margin: 0 auto;
    font-size: 1.1rem;
    padding: 5px 40px;
    text-decoration: none;
    color: ${(props) => props.theme.bg};
    border: 2px solid
      ${(props) => (props.theme.isDarkMode ? props.theme.primary : props.color)};
    border-radius: 30px;
    background-color: ${(props) =>
      props.theme.isDarkMode ? props.theme.primary : props.color};
    transition: all 0.2s ease-in;
    &:hover {
      color: ${(props) =>
        props.theme.isDarkMode ? props.theme.primary : props.color};
      background-color: transparent;
    }
  }
`;

export const WorkTitle = styled.h2`
  margin: 0 0 0.6rem;
  text-align: center;
`;

export const WorkCopy = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  font-weight: lighter;
`;

export const WorkTag = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: lighter;
  color: ${(props) => props.theme.secondary};
`;

export const WorkDescription = styled.div`
  width: 32%;
  margin: 0 auto 3rem;
  font-size: 0.9rem;
  ${media.phone`
    width: 80%;
  `}
`;

export const WorkPageWrapper = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
  }
  img {
    margin-bottom: 1rem;
    ${media.phone`
      margin-bottom: 0;
    `}
  }
  video {
    width: 47%;
    height: 310px;
    ${media.phone`
      height: 150px;
    `}
  }
`;

export const Caption = styled.div`
  margin: 1rem auto 7rem;
  text-align: center;
  color: ${(props) => props.theme.primary};
  ${media.phone`
      margin: 0.8rem auto 4.5rem;
      font-size: 0.85rem;
    `}
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 4rem;
`;
