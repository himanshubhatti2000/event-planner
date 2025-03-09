export type ImageType = {
	id: string;
	format: string;
	blurDataUrl: string;
	url: string;
};

export type ImageObjType = {
	[key: string | number]: ImageType;
};
