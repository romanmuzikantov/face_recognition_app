import React from 'react';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';
import './Navigation.css';

function Navigation(): JSX.Element {
    return (
        <nav className="flex justify-between items-center z-9999 navigation pt3-l pb3-l pt2-ns pb2-ns pl4 pr4">
            <div className="flex items-center" style={{ gap: '24px' }}>
                <Tilt
                    className="w3 h3 tilt shadow-2 flex items-center justify-center pa2 outline background"
                    perspective={250}
                    tiltMaxAngleX={35}
                    tiltMaxAngleY={35}
                >
                    <img src={Brain} alt="" />
                </Tilt>
                <p className="f3 ma0">SmartBrain</p>
            </div>
            <p className="f4 black link pa3 pointer outline br2 ma0 bg-animate hover-bg-white-80 shadow-hover">
                Sign Out
            </p>
        </nav>
    );
}

export default Navigation;
