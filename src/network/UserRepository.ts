import { ErrorResponse } from '../models/ErrorModel';
import { UserResponse } from '../models/UserResponse';

export async function RegisterUser(
    login: string,
    password: string
): Promise<UserResponse | ErrorResponse> {
    const raw = JSON.stringify({
        login,
        password,
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: raw,
    };

    const response = await fetch(`http://localhost:3001/register`, requestOptions);
    const json = await response.json();

    if (response.status < 200 || response.status >= 400) {
        const error: ErrorResponse = JSON.parse(JSON.stringify(json));
        return error;
    }

    const responseModel: UserResponse = JSON.parse(JSON.stringify(json));
    return responseModel;
}

export async function LoginUser(
    login: string,
    password: string
): Promise<UserResponse | ErrorResponse> {
    const raw = JSON.stringify({
        login,
        password,
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: raw,
    };

    const response = await fetch(`http://localhost:3001/login`, requestOptions);
    const json = await response.json();

    if (response.status < 200 || response.status >= 400) {
        const error: ErrorResponse = JSON.parse(JSON.stringify(json));
        return error;
    }

    const responseModel: UserResponse = JSON.parse(JSON.stringify(json));
    return responseModel;
}
