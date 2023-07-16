import React, { useEffect, useRef } from 'react';
import './ImageContainer.css';
import { BoundingBox } from '../../models/PostImageResponse';

interface ImageContainerProps {
    imageUrl: string;
    boundingBoxes: BoundingBox[];
}

function ImageContainer({ imageUrl, boundingBoxes }: ImageContainerProps): JSX.Element {
    const ref: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    useEffect(() => {
        const canvas: HTMLCanvasElement | null = ref.current;
        if (canvas != null) {
            const context = canvas.getContext('2d');
            if (context != null) {
                context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                context.strokeStyle = '#ff4136';

                boundingBoxes.forEach((val) => {
                    const xPos = val.leftColumn * context.canvas.width;
                    const yPos = val.topRow * context.canvas.height;
                    const width = val.rightColumn * context.canvas.width - xPos;
                    const height = val.bottomRow * context.canvas.height - yPos;

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
