import React from "react";

function Footer() {
	let currentYear = new Date().getFullYear();

	return (
		<footer className="footer text-center">
			<div className="container p-4">
				<div className="row">
					<div className="col">
						<span className="align-middle">&#169;{currentYear} Robby Wayong</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
