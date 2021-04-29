import React from 'react';
import './App.css';
import MastHead from './components/mastHead';
import Views from './views/Views';

const App = (): JSX.Element => {

	return (
		<div className='App'>
			<MastHead />
			<div className='body-container'>
				<Views />
			</div>
		</div>
	);
};

export default App;
