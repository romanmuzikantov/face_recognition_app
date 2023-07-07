import React, { BaseSyntheticEvent } from "react";
import './ImageLinkForm.css'
import Rank from "../Rank/Ranks";

interface ImageLinkFormProps {
    onInputChange: (event: BaseSyntheticEvent) => void
    onFormSubmit: () => void
}

const ImageLinkForm = ({ onInputChange, onFormSubmit }: ImageLinkFormProps) => {
    return (
        <div className="flex w-100 justify-center">
            <div className="w-50-l w-100-ns pa4 z-9999 ml3-ns mr3-ns br4 form-card">
                <div className="flex flex-column" style={{gap: '24px'}}>
                    <Rank />
                    <p className="f4 mt0 mb4">
                        {'This Magic Brain will detect faces in images. Give it a try!'}
                    </p>
                </div>
                <div className="flex items-center justify-center" style={{gap: '0.8rem'}}>
                    <input type="text" className="w-70 f4 pa2 center br4 ba b--near-black" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link pv2 dib black br4 ph4 bg-washed-green pointer outline-0 ba b--near-black hover-near-white bg-animate hover-bg-near-black"
                    onClick={onFormSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;