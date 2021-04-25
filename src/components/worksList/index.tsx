import React from 'react';
import { NavLink } from 'react-router-dom';

const WorksList = (props: { worksList: any, worksRootIndex: string }): JSX.Element => {

	const { worksList, worksRootIndex } = props;

	const handleSettingsWorksList = (): JSX.Element[] => {
		const worksListArray: JSX.Element[] = [];
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

		for (const project in worksList) {
			const component = (
				<li className='works-list-li' key={project}>
					<NavLink
						className='works-list-li-link link'
						to={`/works/${worksRootIndex}/${project}`}
					>
						<span className='text' style={{ paddingRight: '1em' }}>-rw-r--r--</span>
						<span className='text' style={{ paddingRight: '0.4em' }}>1</span>
						<span className='text' style={{ paddingRight: '0.8em' }}>johnny</span>
						<span className='text' style={{ paddingRight: '1em' }}>staff</span>
						<span className='text' style={{ paddingRight: '0.8em' }}>{months[new Date().getMonth()]}</span>
						<span className='text' style={{ paddingRight: '0.4em' }}>{new Date().getDate()}</span>
						<span className='text' style={{ paddingRight: '0.4em' }}>{new Date().getHours()}:{new Date().getMinutes()}</span>
						<span className='text' style={{ fontWeight: 'bold' }}>{`${worksList[project].name}`}</span>
						<span className='text'>{`.json`}</span>
					</NavLink>
				</li>
			);
			worksListArray.push(component);
		}

		return worksListArray;
	};

	return (
		<div className='works-list-container'>
			<div className='text'>{'>'} ls -al</div>
			{worksList && (
				<div>
					<div className='text'>total {Object.keys(worksList).length}</div>
					<ul className='works-list-ul'>
						{handleSettingsWorksList()}
					</ul>
				</div>
			)}
		</div>
	);
};

export default WorksList;
