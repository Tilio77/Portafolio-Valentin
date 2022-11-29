import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Yo from './Yo.jpg';

const Services = () => {
	return (
		<div className="services">

			{/* Left Side */}
		  <div className="awesome">
		  	<span>Mi imprecionante</span>
		  	<span>servicio</span>
		  	<span>
		  		Lorem ipsum is simpley dummy text of printing of printhing Lorem
		  		<br />
		  		ipsum is simpley dummy text of printing
		  	</span>
		  	<a href={Yo} download>
		  		<button className="button s-button">Download CV</button>
		  	</a>
		  	<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
		  </div>

		  {/* Right Side */}
		  <div className="cards">
		  	<div style={{ left: "14rem" }}>
		  		<Card 
		  			emoji = {HeartEmoji}
		  			heading = {"Diseño"}
		  			detail = {"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
		  		/>	
		  	</div>

		  	{/* Second Card */}
		  	<div style={{ top: "12rem", left: "-4rem" }}>
		  		<Card 
		  			emoji = {Glasses}
		  			heading = {"Desarrollador"}
		  			detail = {"Html, Css, JavaScript, React"}
		  		/>
		  	</div>

		  	{/* Third Card */}
		  	<div style={{ top: "19rem", left: "12rem" }}>
		  		<Card 
		  			emoji = {Humble}
		  			heading = {"UI/UX"}
		  			detail = {"Lorem ipsum dummy text are usually use in section where"}
		  		/>
		  	</div>
		  	<div className="blur s-blur2" style={{ background: "var(--purple)" }}>
		  		
		  	</div>
		  </div>
		</div>
	)
}

export default Services