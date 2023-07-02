import React from "react";
import Tilt from "react-parallax-tilt";
import Brain from "./brain.png";

const Navigation = () => {
	return (
		<nav className="flex justify-between items-center pa3">
			<Tilt className="w3 h3 tilt shadow-1 flex items-center justify-center pa2 outline">
				<img src={Brain}></img>
			</Tilt>
			<p className="f4 black dim link pa3 pointer outline br2 ma0">Sign Out</p>
		</nav>
	)
}

export default Navigation;