import React from "react";

function Home() {
	return (
		<div className="bg-main">
			<div className="container py-3 text-center">
				<div className="row justify-content-center mt-3">
					<h1 className="col-8">Bond Auction Date</h1>
				</div>
				<div className="row justify-content-center mt-3">
					<div className="col-8">
						<p>
							This website will show you the next auction date of Japanese
							Government Bond (JGB) and US Treasury (UST). Offical auction
							calendars are availabe at Japan Ministry of Finance website for
							JGB and U.S. Department of the Treasury website for UST.
						</p>
					</div>
				</div>
				<div className="row">
					<img src="/home_page.png" className="col-6 mx-auto"></img>
					<caption className="text-center caption">
						<a href="https://www.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_29119378.htm#query=finance&position=1&from_view=search&track=sph">
							Image by pch.vector
						</a>{" "}
						on Freepik
					</caption>
				</div>
			</div>
		</div>
	);
}

export default Home;
