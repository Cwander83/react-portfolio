import React, { useState } from 'react';
import { Transition, Spring, animated } from 'react-spring/renderprops';

import './MobileNav.css';

import MenuIcon from '../../assets/icons/hamburger-menu.png';
import MobileNavBody from './MobileNavBody/MobileNavBody';

const MobileNav = props => {
	
	const [open, setOpen] = useState(false);

	const openNavHandler = () => {
		if (open === false) {
			setOpen(true);
		} else setOpen(false);
	};

	return (
		<>
			<Spring from={{ rotation: '0deg' }} to={{ rotation: open ? '90%' : '0' }}>
				{({ rotation }) => (
					<animated.div
						style={{ transform: `rotate(${rotation})` }}
						className="menu"
						onClick={openNavHandler}
					>
						<img className="hamburgerIcon" src={MenuIcon} alt="nav" />
					</animated.div>
				)}
			</Spring>
			<Transition
				native
				items={open}
				from={{ display: 'none', }}
				enter={{
					zIndex: '2',
					opacity: '1',
				}}
				leave={{ display: 'none',  }}
			>
				{open =>
					open &&
					(transform => (
						<MobileNavBody
							close={openNavHandler}
							transform={transform}
							pages={props.pages}
							click={props.click}
						/>
					))
				}
			</Transition>
		</>
	);
};

export default MobileNav;
