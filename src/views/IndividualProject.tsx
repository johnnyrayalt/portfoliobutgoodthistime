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
				<ul>
					{imageList.map((image: IImageUrlMapping) => {
						return (
							<li key={image.id}>
								<img src={image.url} className="image" alt={`${image.id}`} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default IndividualProject;
