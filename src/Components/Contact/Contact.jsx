import React from 'react';
import "./Contact.css";

const Contact = () => {

	return (
		<div className="contact-form">
			<div className="w-left">
				<div className="awesome">
					<span>Pongase en contacto</span>
					<span>conmigo</span>
					<div
						className="blur s-blur1"
						style = {{ background: "#ABF1FF94"}}
					></div>
				</div>
			</div>

			<div className="c-right">
				<form>
					<input type="text" name="user_name" className="user" placeholder="Nombre" />
					<input type="email" name="user_email" className="user" placeholder="Correo electrónico" />
					<textarea name="message" className="user" placeholder="Mensaje" />
					<input type="submit" value="Send" className="button" />
					<div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
				</form>
			</div>
		</div>
	)
}

export default Contact