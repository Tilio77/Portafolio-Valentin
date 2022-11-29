import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="n-wrapper">
			<div className="n-left">
				<div className="n-name">Valentín</div>
				<span>toggle</span>
			</div>
			<div className="n-right">
				<div className="n-list">
					<ul style={{listStyleType: 'none'}}>
						<li>Inicio</li>
						<li>Servicios</li>
						<li>Experiencia</li>
						<li>Portafolio</li>
						<li>Testimonios</li>
					</ul>
				</div>
				<button className="button n-button">
					Contactar
				</button>
			</div>
		</div>
	)
}

export default Navbar