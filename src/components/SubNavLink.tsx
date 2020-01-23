import React from 'react';
import { NavLink } from 'react-router-dom';

export interface ILink {
	parent: string;
	child: string;
}

const SubNavLink = (props: { link: ILink; classNames: string[] }) => {
	const parseClassNames = (classNames: string[]): string => {
		if (!classNames) {
			return '';
		}

		let nameString = '';
		for (let name of classNames) {
			nameString += `${name} `;
		}

		return nameString.trim();
	};

	const parseString = () => {
		const firstChar: string = props.link.child.charAt(0).toUpperCase();
		const subString: string = props.link.child.substring(1).toLowerCase();

		return firstChar + subString;
	};

	return (
		<NavLink className={parseClassNames(props.classNames)} to={`/${props.link.parent}/${props.link.child}`}>
			{parseString()}
		</NavLink>
	);
};

export default SubNavLink;
