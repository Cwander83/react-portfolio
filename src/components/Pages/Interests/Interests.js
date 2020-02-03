import React from "react";

import "./Interests.css";
import ContentBox from "../../../hoc/ContentBox";
import ContentTitle from "../../ContentTitle/ContentTitle";
import LeftBubble from "../../Bubbles/LeftBubble/LeftBubble";
import RightBubble from "../../Bubbles/RightBubble/RightBubble";

const interests = () => {
  return (
    <ContentBox>
      <ContentTitle>interests </ContentTitle>
      <LeftBubble>
        <h3 className="contentH3">Web Development </h3>
        <p className="interestP"> - Of Course.</p>
      </LeftBubble>
      <RightBubble>
        <h3 className="contentH3">Gym</h3>
        <p className="interestP">
          - I'm a avid supporter of picking things up and putting them down!
        </p>
      </RightBubble>
      <LeftBubble>
        <h3 className="contentH3">Tacos</h3>
        <p className="interestP">
          - Yum Yum Yum! Al Pastor, are my favorite. How bout you?
        </p>
      </LeftBubble>
      <RightBubble>
        <h3 className="contentH3">Outdoorsman</h3>
        <p className="interestP">
          - I actually own 2 kayaks and 2 bikes, I don't to use them as much as
          I would like.
        </p>
      </RightBubble>
      <LeftBubble>
        <h3 className="contentH3">Dwayne Johnson</h3>
        <p className="interestP">
          - Weird I know, but his motivational videos on Youtube and personal
          drive to be the best. Definitely have a large impact on my life!
        </p>
      </LeftBubble>
    </ContentBox>
  );
};

export default interests;
