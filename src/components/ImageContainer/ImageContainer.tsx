import React, { useEffect, useRef } from 'react';
import { BoundingBox } from '../../models/ClarifaiFaceDetectionResponse';
import './ImageContainer.css';

interface ImageContainerProps {
    imageUrl: string;
    boundingBoxes: BoundingBox[];
}

function ImageContainer({ imageUrl, boundingBoxes }: ImageContainerProps): JSX.Element {
    console.log(boundingBoxes);
    const ref: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = ref.current;
        if (canvas != null) {
            const context = canvas.getContext('2d');
            if (context != null) {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                context.strokeStyle = '#ff4136';

                boundingBoxes.forEach((val) => {
                    const xPos = val.left_col * context.canvas.width;
                    const yPos = val.top_row * context.canvas.height;
                    const width = val.right_col * context.canvas.width - xPos;
                    const height = val.bottom_row * context.canvas.height - yPos;

                    context.strokeRect(xPos, yPos, width, height);
                });
            }
        }
    }, [boundingBoxes]);

    return (
        <div className="flex justify-center">
            <div className="z-9999 ml3 mr3 canvas-container">
                <canvas ref={ref} className="canvas" />
                <img alt="" src={imageUrl} />
            </div>
        </div>
    );
}

export default ImageContainer;
