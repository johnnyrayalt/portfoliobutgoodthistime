import React from 'react';
import './styles.css';

const ImageScroll = (props: { imageList: any }): JSX.Element => {
	const { imageList } = props;

	return (
		<div className='image-scroll-container'>
			<ul>
				{imageList !== undefined && imageList.map((image: any) => (
					<li key={image.id}>
						<img className='image' src={image.url}  alt={''}/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ImageScroll;