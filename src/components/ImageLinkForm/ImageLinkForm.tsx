import React, { BaseSyntheticEvent } from "react";
import './ImageLinkForm.css'
import Rank from "../Rank/Ranks";

interface ImageLinkFormProps {
    onInputChange: (event: BaseSyntheticEvent) => void
    onFormSubmit: () => void
}

const ImageLinkForm = ({ onInputChange, onFormSubmit }: ImageLinkFormProps) => {
    return (
        <div className="w-50-l w-90-ns pa4 center z-9999 form-card">
            <div className="flex flex-column" style={{gap: '24px'}}>
                <Rank />
                <p className="f4 mt0 mb4">
                    {'This Magic Brain will detect faces in images. Give it a try!'}
                </p>
            </div>
            <div className="flex items-center justify-center" style={{gap: '0.8rem'}}>
                <input type="text" className="w-70 f4 pa2 center" onChange={onInputChange}/>
                <button className="w-30 grow f4 link pv2 dib black br2 ph4 bg-washed-green pointer outline-0 ba border-color hover-near-white bg-animate hover-bg-near-black"
                onClick={onFormSubmit}>
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;