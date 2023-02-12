import React, { useState, useEffect } from "react";

function Navbar() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		console.log(currentPath);
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<nav className="navbar navbar-expand-lg bg-header">
			<div className="container-fluid container">
				<a className="navbar-brand" href="/">
					Bond Auction Date
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className={"nav-link " + (currentPath === "/" ? "active" : "")}
								href="/"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									"nav-link " +
									(currentPath === "/how-it-works" ? "active" : "")
								}
								href="/how-it-works"
							>
								How
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									"nav-link " + (currentPath === "/jgb" ? "active" : "")
								}
								href="/jgb"
							>
								JGB
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									"nav-link " + (currentPath === "/ust" ? "active" : "")
								}
								href="/ust"
							>
								UST
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
