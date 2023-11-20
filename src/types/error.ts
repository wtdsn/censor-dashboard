export enum SubErrorType {
	// 同步任务，普通异步任务错误
	syncError = 1,
	// 资源加载错误
	resourceError = 2,
	// promise 错误
	promiseError = 3,
	// fetch 错误
	fetchError = 4,
	// xhr 错误
	xhrError = 5,
}

export interface SyncErrorData {
	type: SubErrorType.syncError;
	message: string;
	filename: string;
	colno: number;
	lineno: number;
}

export interface ResourceErrorData {
	type: SubErrorType.resourceError;
	tagName: string;
	url: string;
	message: string;
}

export interface PromiseErrorData {
	type: SubErrorType.promiseError;
	message: string;
	stack: string;
}

export interface RequestErrorData {
	type: SubErrorType.fetchError | SubErrorType.xhrError;
	method: string;
	url: string;
	status: number;
	stausText: string;
}

export default interface ErrorLogItem {
	logType: number;
	time: string;
	uid: string;
	pagePath: string;
	data: SyncErrorData | ResourceErrorData | PromiseErrorData | RequestErrorData;
}
