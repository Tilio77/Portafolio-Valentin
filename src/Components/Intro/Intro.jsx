import React from 'react';
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
	return (
		<div className="intro">
			<div className="i-left">
				<div className="i-name">
					<span>¡Hola! yo soy</span>
					<span>Valentín Quijano</span>
					<span>
						Desarrollador Frontend con alto nivel
						de experiencia en diseño y desarrollo web,<br/>
						me gusta producir trabajo de calidad.
					</span>
				</div>
				<button className="button i-button">Contratame</button>
				<div className="i-icons">
					<a href="https://github.com/Tilio77" target="_blank" rel="noreferrer noopener">
						<img src={GitHub} alt="Github" />
					</a>
					<a href="https://www.linkedin.com/in/valentin-quijano-bb8893241/" target="_blank" rel="noreferrer noopener">
						<img src={LinkedIn} alt="LinkedIn" />
					</a>
					<a href="https://www.instagram.com/tilio_bolso/" target="_blank" rel="noreferrer noopener">
						<img src={Instagram} alt="Instagram" />	
					</a>
				</div>
			</div>

			<div className="i-right">
				<img src={Vector1} alt="Vector img" />
				<img src={Vector2} alt="Vector img" />
				<img src={boy} alt="Boy img" />
				<img src={glassesimoji} alt="Emoji" />
				<div style={{ top: "-4%", left: "68%"}}>
					<FloatingDiv image={crown} txt1="Desarrollador" txt2="web" />
				</div>
				<div style={{ top: "18rem", left: "0rem"}}>
					<FloatingDiv image={thumbup} txt1="Premio al" txt2="mejor diseño" />
				</div>

				{/* Blur Divs*/}
				<div className="blur" style={{ background: "rgb(238 210 255)"}}></div>
				<div 
					className="blur" 
					style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem"}}>
				</div>
			</div>
		</div>
	)
}

export default Intro