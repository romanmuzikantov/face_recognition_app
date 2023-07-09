import React from 'react';
import { BoundingBox } from '../../models/ClarifaiFaceDetectionResponse';

interface ImageContainerProps {
    imageUrl: string;
    boundingBoxes: BoundingBox[];
}

function ImageContainer({ imageUrl, boundingBoxes }: ImageContainerProps): JSX.Element {
    console.log(boundingBoxes);
    return (
        <div className="z-9999">
            <img alt="" src={imageUrl} />
        </div>
    );
}

export default ImageContainer;
