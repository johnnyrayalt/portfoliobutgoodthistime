import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
	return (
		<div className='name-container'>
			<NavLink className='link' to='/'>
				&#x263B; Johnny_Ray_Alt: ~/ run site
			</NavLink>
		</div>
	);
};

export default Header;
