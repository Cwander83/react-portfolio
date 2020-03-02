import React from 'react';

import './Button.css';

const button = props => {
	return (
		<>
			{props.pages.map((page, i) => {
				return (
					<button
						key={i}
						type="submit"
						value={i}
						className="button"
						onClick={i => {
							props.click(i);
						}}
					>
						<span>{page.page}</span>
					</button>
				);
			})}
		</>
	);
};

export default button;
