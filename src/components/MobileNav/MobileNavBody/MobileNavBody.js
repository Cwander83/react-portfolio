import React from 'react';
import { animated } from 'react-spring/renderprops';

import './MobileNavBody.css';

const mobileNavBody = props => {
	console.log(props);
	return (
		<animated.div className="popup" style={props}>
			<ul className="navUl">
				{props.pages.map((page, i) => {
					return (
						<li
							key={i}
							value={i}
							className="link"
							onClick={i => {
								props.click(i);
								props.close();
							}}
						>
							{page.page}
						</li>
					);
				})}
			</ul>
		</animated.div>
	);
};

export default mobileNavBody;
