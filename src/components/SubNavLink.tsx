import { ILink } from 'interfaces/ILink';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavLink = (props: { link: ILink; classNames: string[] }): JSX.Element => {
	const parseClassNames = (classNames: string[]): string => {
		if (!classNames) {
			return '';
		}

		let nameString: string = '';

		for (let name of classNames) {
			nameString += `${name} `;
		}

		return nameString.trim();
	};

	const parseDisplayString = (): string => {
		const firstChar: string = props.link.child.charAt(0).toUpperCase();
		const subString: string = props.link.child.substring(1).toLowerCase();

		return firstChar + subString;
	};

	return (
		<NavLink className={parseClassNames(props.classNames)} to={`/${props.link.parent}/${props.link.child}`}>
			{parseDisplayString()}
		</NavLink>
	);
};

export default SubNavLink;
