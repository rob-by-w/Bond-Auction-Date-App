import React from "react";

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg bg-header">
			<div class="container-fluid container">
				<a class="navbar-brand" href="#">
					Bond Auction Date
				</a>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active"href="#">
							JGB
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							UST
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
