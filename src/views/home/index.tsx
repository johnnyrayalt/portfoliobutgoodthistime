import React, { FC } from 'react';
import Processing from '../../components/processing';
import './styles.css';

const Home: FC = (): JSX.Element => {

	return (
		<>
			<div className='home-container'>
				<Processing />
			</div>
		</>
	);
};

export default Home;
