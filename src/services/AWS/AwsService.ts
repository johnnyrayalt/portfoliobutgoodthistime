import * as AWS from 'aws-sdk';
import { IAWSConfig } from '../../interfaces/IAWSConfig';
import { IImageUrlMapping } from '../../interfaces/IImageUrlMapping';

export class AWSService {
	private s3: AWS.S3;

	private readonly bucketName: string;
	private readonly identityPoolId: string;
	private readonly region: string;
	private readonly apiVersion: string;

	private imageUrlMaps: IImageUrlMapping[] = [];

	constructor(awsConfig: IAWSConfig) {
		this.bucketName = awsConfig.BUCKET_NAME;
		this.identityPoolId = awsConfig.IDENTITY_POOL_ID;
		this.region = awsConfig.REGION;
		this.apiVersion = awsConfig.API_VERSION;

		AWS.config.region = this.region;
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: this.identityPoolId,
		});
		this.s3 = new AWS.S3({
			apiVersion: this.apiVersion,
			params: { Bucket: this.bucketName },
		});
		this.getImagesFromS3(this.s3);
	}

	public getImageUrlMaps = (): IImageUrlMapping[] => {
		return this.imageUrlMaps;
	};

	private getImagesFromS3 = (s3: AWS.S3): void => {
		const params: AWS.S3.ListObjectsV2Request = {
			Bucket: this.bucketName,
		};

		const imageUrls: IImageUrlMapping[] = [];
		const getKeys = (): AWS.Request<AWS.S3.ListObjectsV2Output, AWS.AWSError> => {
			return s3.listObjectsV2(params, (err: AWS.AWSError, data: AWS.S3.ListObjectsV2Output): void => {
				if (err) {
					throw new Error(`Error getting keys from AWS: ${err.message}`);
				} else {
					data.Contents?.forEach((image: AWS.S3.Object): void => {
						if (image.Key === undefined || image.Key.charAt(image.Key.length - 1) === '/') return;

						const url = `https://${this.bucketName}.s3-${this.region}.amazonaws.com/${image.Key}`;
						const urlMapping: IImageUrlMapping = {
							id: image.Key,
							url: url,
						};
						imageUrls.push(urlMapping);

						if (data.IsTruncated) {
							params.ContinuationToken = data.ContinuationToken;
							getKeys();
						}
					});
				}
			});
		};
		getKeys();
		this.imageUrlMaps = imageUrls;
	};
}
