import React from 'react';

import './Experience.css';

import ContentBox from '../../../hoc/ContentBox';
import ContentTitle from '../../ContentTitle/ContentTitle';
import LeftBubble from '../../Bubbles/LeftBubble/LeftBubble';
import RightBubble from '../../Bubbles/RightBubble/RightBubble';

const experience = () => {
	return (
		<ContentBox>
			<ContentTitle>experience</ContentTitle>

			<LeftBubble>
				<h3 className="expH3">freelance</h3>
				<h4 className="expH4">web developer</h4>
				{/* <p>
          · Responsible for the design, layout and coding of websites. Involved
          with the technical and graphical aspects of a website - how the site
          works and how it looks. As well as involved with the maintenance and
          update of an existing site.
        </p> */}

				<div>
					<p>· Current Position</p>
				</div>
			</LeftBubble>
			<RightBubble>
				<h3 className="expH3">Universal studios citywalk</h3>
				<h4 className="expH4">bartender</h4>
				{/* <p >
          · In Universal Studios I work in the highest rated and busiest
          restaurant in the CityWalk area. In this very high stress department I
          make drinks and serve and exceed all guests need. While driving
          thousands of dollars of sales every week, while maximuming upselling
          company standards.
        </p> */}

				<div>
					<p>· Current Position</p>
				</div>
			</RightBubble>
			<LeftBubble>
				<h3 className="expH3">tgi fridays</h3>
				<h4 className="expH4">bartender / trainer</h4>
				{/* <p>
          · Starting at Friday's right out of high school, I moved from up from
          Server Assistant to Wait Staff to Bartender in months. No quit No rest
          attitude, putting all I had everyday I moved Bar Trainer in serveral
          locations in Columbus, OH and Orlando, FL.
        </p> */}
			</LeftBubble>
		</ContentBox>
	);
};

export default experience;
