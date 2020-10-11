import React from 'react';

import './NavBox.css';

const navBox = props => {
	return <nav className="nav">{props.children}</nav>;
};

export default navBox;
