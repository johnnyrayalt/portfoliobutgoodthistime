import React, { FC } from 'react';
import { useViewport } from '../../utils/useViewportHook';
import Header from '../header';
import MobileNav from '../mobileNav';
import Navigation from '../navigation';
import './styles.css';

const MastHead: FC = (): JSX.Element => {
	const { width } = useViewport();

	return (
		<div className='masthead'>
			<Header />
			{(width > 930) ? <Navigation /> : <MobileNav />}
		</div>
	);
};

export default MastHead;
