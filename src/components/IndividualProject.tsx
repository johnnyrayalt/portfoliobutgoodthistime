import React from 'react';
import { useParams } from 'react-router-dom';
import { IImageUrlMapping } from '../interfaces/IImageUrlMapping';
import './IndividualProjectStyles.scss';

interface RouteInfo {
	key: string;
}

const IndividualProject = (props: { imagesList: IImageUrlMapping[] }): JSX.Element => {
	const imageList: IImageUrlMapping[] = [];
	const params = useParams<RouteInfo>();

	(() =>
		props.imagesList.forEach((image: IImageUrlMapping) => {
			if (image.id.includes(params.key)) {
				const getIndex = image.id.replace(/\D/g, '');
				const newImage: IImageUrlMapping = {
					id: getIndex,
					url: image.url,
				};
				imageList.push(newImage);
			}
			imageList.sort((a, b) => {
				return parseInt(a.id) - parseInt(b.id);
			});
		}))();

	return (
		<div className="individual-project-container">
			<div className="individual-project-image-list">
				<ul className="individual-project-image-ul">
					{imageList.map((image: IImageUrlMapping) => {
						return (
							<li className="individual-project-image-li" key={image.id}>
								<a className="individual-project-image-link" href={image.url} target="_blank" rel="noopener noreferrer">
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
