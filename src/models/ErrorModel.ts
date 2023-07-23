export interface ErrorResponse {
    message: string;
}

export function isError(error: any): error is ErrorResponse {
    return (error as ErrorResponse).message !== undefined;
}
