import { AwsServiceHelper } from './AwsServiceHelper';
import * as AWS from 'aws-sdk';
import { IImageMap } from '../interfaces/IImageMap';

export class AwsService {
	private s3!: AWS.S3;

	private readonly bucketName: string;
	private readonly identityPoolId: string;
	private readonly region: string;
	private readonly apiVersion: string;

	constructor(awsConfig: { BUCKET_NAME: string; IDENTITY_POOL_ID: string; REGION: string; API_VERSION: string }) {
		this.bucketName = awsConfig.BUCKET_NAME;
		this.identityPoolId = awsConfig.IDENTITY_POOL_ID;
		this.region = awsConfig.REGION;
		this.apiVersion = awsConfig.API_VERSION;
	}

	public getImageUrlMaps = async () => {
		return await this.getImages(this.s3, this.bucketName, this.region).then((res) => res);
	};

	public init = () => {
		this.config(this.region, this.identityPoolId, this.apiVersion, this.bucketName);
	};

	private config = (region: string, identityPoolId: string, apiVersion: string, bucketName: string): void => {
		AWS.config.region = region;
		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
			IdentityPoolId: identityPoolId,
		});
		this.s3 = new AWS.S3({
			apiVersion: apiVersion,
			params: { Bucket: bucketName },
		});
	};

	private getImages = async (s3: AWS.S3, bucketName: string, region: string) => {
		const params: AWS.S3.ListObjectsV2Request = {
			Bucket: bucketName,
		};

		return await this.getS3Data(s3, bucketName, region, params);
	};

	private getS3Data = async (
		s3: AWS.S3,
		bucketName: string,
		region: string,
		params: AWS.S3.ListObjectsV2Request,
	): Promise<IImageMap[]> => {
		const s3Data: IImageMap[] = [];

		await s3
			.listObjectsV2(params)
			.promise()
			.then((res) => {
				res.Contents?.forEach((item: AWS.S3.Object): void => {
					if (item.Size === 0) return;

					const imageMap: IImageMap = {
						id: AwsServiceHelper.getImageId(item),
						root: AwsServiceHelper.getImageRoot(item),
						key: AwsServiceHelper.getImageKey(item),
						url: `https://${bucketName}.s3-${region}.amazonaws.com/${item.Key}`,
					};

					s3Data.push(imageMap);
				});

				return s3Data;
			})
			.catch((err) => {
				throw new Error(err.message);
			});
		console.log(s3Data);
		return s3Data;
	};
}
