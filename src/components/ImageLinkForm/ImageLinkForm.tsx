import React from "react";

const ImageLinkForm = () => {
    return (
        <div className="br2 bg-white-70 shadow-1 w-50 pa4 center z-9999">
            <p className="f4 mt0 mb4">
                {'This Magic Brain will detect faces in images. Give it a try!'}
            </p>
            <div className="flex items-center justify-center" style={{gap: '0.8rem'}}>
                <input type="text" className="w-70 f4 pa2 center"/>
                <button className="w-30 grow f4 link pv2 dib black br2 ph4 bg-washed-green pointer outline-0 ba border-color hover-near-white bg-animate hover-bg-near-black">
                    Detect
                </button>
            </div>
        </div>
    )
}

export default ImageLinkForm;