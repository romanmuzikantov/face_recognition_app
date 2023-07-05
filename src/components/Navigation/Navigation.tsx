import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./brain.png";
import './Navigation.css';

const Navigation = () => {
	return (
		<nav className="flex justify-between items-center pa4 z-9999">
			<Tilt className="w3 h3 tilt shadow-2 flex items-center justify-center pa2 outline background" perspective={250} tiltMaxAngleX={35} tiltMaxAngleY={35}>
				<img src={Brain}></img>
			</Tilt>
			<p className="f4 black link pa3 pointer outline br2 ma0 bg-animate hover-bg-white-80 shadow-hover">Sign Out</p>
		</nav>
	)
}

export default Navigation;