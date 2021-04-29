import React, { useEffect, useState } from 'react';
import './App.css';
import { IMAGE_KV } from './assets/constants';
import Views from './views/Views';
import MastHead from './components/mastHead';

const App = (): JSX.Element => {

	return (
		<div className='App'>
			<MastHead expandedDefaultState={false} />
			<div className='body-container'>
				<Views />
			</div>
		</div>
	);
};

export default App;
