import React from 'react';

const ImageScroll = (props: { imageList: any }): JSX.Element => {
	const { imageList } = props;

	return (
		<div>
			<ul>
				{imageList !== undefined && imageList.map((image: any) => (
					<li key={image.id}>
						<img src={image.url}  alt={''}/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ImageScroll;