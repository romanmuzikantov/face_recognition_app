import { ErrorResponse } from '../models/ErrorModel';
import { IncrementResponse } from '../models/IncrementResponse';
import { UserResponse } from '../models/UserResponse';

class UserRepository {
    static async RegisterUser(
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

        const response = await fetch(
            `https://face-recognition-backend.fly.dev/register`,
            requestOptions
        );
        const json = await response.json();

        if (response.status < 200 || response.status >= 400) {
            const error: ErrorResponse = JSON.parse(JSON.stringify(json));
            return error;
        }

        const responseModel: UserResponse = JSON.parse(JSON.stringify(json));
        return responseModel;
    }

    static async LoginUser(login: string, password: string): Promise<UserResponse | ErrorResponse> {
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

        const response = await fetch(
            `https://face-recognition-backend.fly.dev/login`,
            requestOptions
        );
        const json = await response.json();

        if (response.status < 200 || response.status >= 400) {
            const error: ErrorResponse = JSON.parse(JSON.stringify(json));
            return error;
        }

        const responseModel: UserResponse = JSON.parse(JSON.stringify(json));
        return responseModel;
    }

    static async IncrementUserEntries(userId: number): Promise<IncrementResponse | undefined> {
        const raw = JSON.stringify({
            userId,
        });

        const requestOptions = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: raw,
        };

        const response = await fetch(
            `https://face-recognition-backend.fly.dev/entries`,
            requestOptions
        );
        const json = await response.json();

        if (response.status < 200 || response.status >= 400) {
            return undefined;
        }

        const responseModel: IncrementResponse = JSON.parse(JSON.stringify(json));
        return responseModel;
    }
}

export default UserRepository;
