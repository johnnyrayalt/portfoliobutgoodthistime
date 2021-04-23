import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className='name-container'>
			<NavLink className='link' to='/'>
				Johnny Ray Alt
			</NavLink>
		</div>
	);
};

export default Header;
