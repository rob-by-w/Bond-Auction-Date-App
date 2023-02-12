import React from "react";

function Footer() {
	let currentYear = new Date().getFullYear();

	return (
		<div>
			<footer className="footer text-center fixed-bottom show-on-long">
				<div className="container p-4">
					<div className="row">
						<div className="col">
							<div className="align-middle">
								&#169;{currentYear} Robby Wayong
							</div>
							<div className="mt-2">
								<span className="p-3">
									<a
										target="_blank"
										href="https://www.linkedin.com/in/rwayong"
										className="anchor-icon"
									>
										<i class="fa-brands fa-linkedin"></i>
									</a>
								</span>
								<span>
									<a
										target="_blank"
										href="https://github.com/rob-by-w"
										className="anchor-icon"
									>
										<i class="fa-brands fa-square-github"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<footer className="footer text-center show-on-short">
				<div className="container p-4">
					<div className="row">
						<div className="col">
							<div className="align-middle">
								&#169;{currentYear} Robby Wayong
							</div>
							<div className="mt-2">
								<span className="p-3">
									<a
										target="_blank"
										href="https://www.linkedin.com/in/rwayong"
										className="anchor-icon"
									>
										<i class="fa-brands fa-linkedin"></i>
									</a>
								</span>
								<span>
									<a
										target="_blank"
										href="https://github.com/rob-by-w"
										className="anchor-icon"
									>
										<i class="fa-brands fa-square-github"></i>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
