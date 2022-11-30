import React from 'react';
import "./Works.css";
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';

const Works = () => {
	return (
		<div className="works">
			{/* Left Side */}
		  <div className="awesome">
		  	<span>Trabajo para todos</span>
		  	<span>Marcas & Clientes</span>
		  	<span>
		  		Lorem ipsum is simpley dummy text of printing of printhing Lorem
		  		<br />
		  		ipsum is simpley dummy text of printing
		  		<br />
		  		ipsum is simpley dummy text of printing dummy text
		  		<br />
		  		Lorem ipsum is simpley dummy text
		  	</span>
		  		<button className="button s-button">Contratame</button>
		  	<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
		  </div>

		  {/* Right Side*/}
		  <div className="w-right">
		  	<div className="w-mainCircle">

		  		<div className="w-secCircle">
		  			<img src={Upwork} alt="Upwork" />
		  		</div>

		  		<div className="w-secCircle">
		  			<img src={Fiverr} alt="Fiverr" />
		  		</div>

		  		<div className="w-secCircle">
		  			<img src={Amazon} alt="Amazon" />
		  		</div>

		  		<div className="w-secCircle">
		  			<img src={Shopify} alt="Shopify" />
		  		</div>

		  		<div className="w-secCircle">
		  			<img src={Facebook} alt="Facebook" />
		  		</div>

		  		{/* Background Circles*/}
		  		<div className="w-backCircle blueCircle"></div>
		  		<div className="w-backCircle yellowCircle"></div>
		  	</div>
		  </div>
		</div>
	)
}

export default Works