import React from 'react';
import { useParams } from 'react-router-dom';
import { Constants } from '../assets/Constants';
import { IImageUrlMapping } from '../interfaces/IImageUrlMapping';
import { Group } from '../types/GroupType';
import './IndividualProjectStyles.scss';

interface RouteInfo {
	key: string;
}

const IndividualProject = (props: { imagesList: IImageUrlMapping[]; type: Group }): JSX.Element => {
	const imageList: IImageUrlMapping[] = [];
	const params = useParams<RouteInfo>();
	const projectInfo = Constants.projects[props.type][params.key];

	(() =>
		props.imagesList.forEach((image: IImageUrlMapping) => {
			if (image.id.includes(params.key)) {
				const getIndex = image.id.replace(/\D/g, '');
				let newImage: IImageUrlMapping = {
					id: getIndex,
					url: image.url,
				};

				if (projectInfo.link === undefined) {
					newImage.link = image.url;
				} else {
					newImage.link = projectInfo.link;
				}

				imageList.push(newImage);
			}
			imageList.sort((a, b) => {
				return parseInt(a.id) - parseInt(b.id);
			});
		}))();

	return (
		<div className="individual-project-container">
			<div className="individual-project-info-container">
				<p className="individual-project-info-text text individual-project-info-name">{projectInfo.name}</p>
				<p className="individual-project-info-text text individual-project-info-description">
					{projectInfo.description()}
				</p>
				<p className="individual-project-info-text text individual-project-info-year">{projectInfo.year}</p>
			</div>
			<div className="individual-project-image-list">
				<ul className="individual-project-image-ul">
					{imageList.map((image: IImageUrlMapping) => {
						return (
							<li className="individual-project-image-li" key={image.id}>
								<a
									className="individual-project-image-link link"
									href={image.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={image.url} className="individual-project-image" alt={`${image.id}`} />
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default IndividualProject;
