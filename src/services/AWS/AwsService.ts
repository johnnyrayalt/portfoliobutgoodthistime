import * as AWS from 'aws-sdk';

export interface IAWSConfig {
	readonly BUCKET_NAME: string;
	readonly IDENTITY_POOL_ID: string;
	readonly REGION: string;
	readonly API_VERSION: string;
}

export class AWSService {
	private s3: AWS.S3;
	private readonly bucketName: string;
	private readonly identityPoolId: string;
	private readonly region: string;
	private readonly apiVersion: string;

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
	}

	public getImages = () => {
		const params = { Bucket: this.bucketName, Delimiter: '/' };
		this.s3.listObjects(params, (err, data) => {
			if (err) {
				throw new Error(`There was an error listing your albums:${err.message}`);
			}

			const albums = data.CommonPrefixes?.map(commonPrefix => {
				const prefix = commonPrefix.Prefix as string;
				const albumName = decodeURIComponent(prefix?.replace('/', ''));
				return albumName;
			});
			console.log(albums);
		});
	};
}
