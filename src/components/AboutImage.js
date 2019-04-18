import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useGesture } from "react-with-gesture";
import styled from "styled-components";
import clamp from "lodash-es/clamp";
import me from "../images/me.jpg";
import poco from "../images/poco.png";

const AboutImage = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8);
    set({
      xy: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 10 }
    });
  });
  const [mouseOnImage, toggle] = useState(false);

  return (
    <MeImageContainer
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      <img src={me} alt="me" />
      <animated.img
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
          position: "absolute",
          left: "76px",
          top: "64px",
          width: "105px"
        }}
        draggable="false" // Prevent drag. without this, useGesture's 'down' is not captured correctly
        src={poco}
        alt="Cute dog face"
      />
      <FadeOutText mouseOnImage={mouseOnImage}>
        Yes, you can drag my face.
      </FadeOutText>
    </MeImageContainer>
  );
};

export default AboutImage;

const MeImageContainer = styled.div`
  position: relative;
  margin: 0;
  img {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const FadeOutText = styled.p`
  position: absolute;
  text-align: center;
  letter-spacing: normal;
  font-size: 0.75rem;
  width: 100%;
  color: lightgray;
  margin-bottom: 1rem;
  top: 234px;
  transition: opacity 1500ms;
  opacity: ${props => (props.mouseOnImage ? 0 : 1)};

  @media (max-width: 576px) {
    letter-spacing: -0.05em;
  }
`;
