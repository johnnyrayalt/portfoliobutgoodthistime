import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IExpandedDefaultState } from '../../interfaces/IExpandedDefaultState';
import './styles.css';

const Navigation = (props: IExpandedDefaultState): JSX.Element => {
	const { expandedDefaultState } = props;

	const EXPANDED_STATE_KEYS = {
		WORKS: 'works',
		SOCIALS: 'socials'
	}

	const [expanded, setExpanded] = useState<{ [name: string]: boolean }>({
		works: expandedDefaultState,
		socials: expandedDefaultState,
	});

	const handleChangeExpanded = (stateToChange: string): void => {
		if (stateToChange === EXPANDED_STATE_KEYS.WORKS) {
			!expanded.works ? setExpanded({ works: true }) : setExpanded({ works: false });
		} else if (stateToChange === EXPANDED_STATE_KEYS.SOCIALS) {
			!expanded.socials ? setExpanded({ socials: true }) : setExpanded({ socials: false });
		}
	};

	return (
		<div id='navigation-container'>
			<div className='navigation-links-container'>
				<nav>
					<ul className='nav-ul'>
						<li className='nav-li'>
							<button onClick={() => handleChangeExpanded(EXPANDED_STATE_KEYS.WORKS)} className='link btn'>
								.works(↳)
							</button>
							{expanded.works && (
								<ul className='sub-nav-ul'>
									<li className='sub-nav-li'>
										<NavLink className='sub-nav-link link' to='/works/art'>
											.art()
										</NavLink>
									</li>
									<li className='sub-nav-li'>
										<NavLink className='sub-nav-link link' to='/works/professional'>
											.professional()
										</NavLink>
									</li>
								</ul>
							)}
						</li>
						<li className='nav-li'>
							<NavLink className='link' to='/about'>
								.about()
							</NavLink>
						</li>
						<li className='nav-li'>
							<button onClick={() => handleChangeExpanded(EXPANDED_STATE_KEYS.SOCIALS)} className='link btn'>
								.contacts(↳)
							</button>
							{expanded.socials && (
								<ul className='sub-nav-ul'>
									<li className='sub-nav-li'>
										<a className='link' href='https://linkedin.com/in/johnnyrayalt' rel='noopener noreferrer'
											 target='_blank'>
											.linkedin(&#x02197;)
										</a>
									</li>
									<li className='sub-nav-li'>
										<a className='link' href='mailto:johnnyrayalt@gmail.com'>
											.email(&#x02197;)
										</a>
									</li>
								</ul>
							)}
						</li>
						<li className='nav-li'>
							<a className='link' href='https://github.com/johnnyrayalt' rel='noopener noreferrer' target='_blank'>
								.github(&#x02197;)
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
