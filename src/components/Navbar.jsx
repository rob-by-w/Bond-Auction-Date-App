import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-header">
			<div className="container-fluid container">
				<a className="navbar-brand" href="/">
					Bond Auction Date
				</a>
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link active" href="/">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/jgb">
							JGB
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/ust">
							UST
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
