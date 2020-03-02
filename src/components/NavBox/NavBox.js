import React from 'react';

import './NavBox.css';

const navBox = props => {
	return <div className="nav">{props.children}</div>;
};

export default navBox;
