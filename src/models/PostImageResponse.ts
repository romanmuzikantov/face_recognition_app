export interface PostImageResponse {
    boundingBoxes: BoundingBox[];
}

export interface BoundingBox {
    topRow: number;
    bottomRow: number;
    leftColumn: number;
    rightColumn: number;
}
