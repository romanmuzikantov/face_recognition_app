import { PostImageResponse } from '../models/PostImageResponse';

class ImageReposistory {
    static async FindFacesInImage(imageUrl: string): Promise<PostImageResponse> {
        const raw = JSON.stringify({
            imageUrl,
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

        const response = await fetch(`http://localhost:3001/image`, requestOptions);
        const json = await response.json();
        const responseModel: PostImageResponse = JSON.parse(JSON.stringify(json));
        return responseModel;
    }
}

export default ImageReposistory;
