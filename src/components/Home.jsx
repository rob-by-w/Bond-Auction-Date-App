import React from "react";

function Home() {
	return (
		<div className="container py-3">
			<div className="row justify-content-center text-start mt-3">
				<div className="col-8">
					<h1 className="text-center">Bond Auction Date</h1>
					<div className="row justify-content-center">
						<div className="col-10">
							<hr class="border-color" />
						</div>
					</div>
					<p className="mt-3">
						This website will show you the next auction date of Japanese
						Government Bond (JGB) and US Treasury (UST). Offical auction
						calendars are availabe at{" "}
						<a
							target="_blank"
							href="https://www.mof.go.jp/english/policy/jgbs/auction/calendar/index.htm"
							className="link"
						>
							{" "}
							Japan Ministry of Finance website{" "}
							<i
								className="fa-solid fa-arrow-up-right-from-square fa-sm"
								target="_blank"
							></i>
						</a>{" "}
						for JGB and{" "}
						<a
							target="_blank"
							href="https://home.treasury.gov/system/files/221/Tentative-Auction-Schedule.pdf"
							className="link"
						>
							U.S. Department of the Treasury website{" "}
							<i
								className="fa-solid fa-arrow-up-right-from-square fa-sm"
								target="_blank"
							></i>
						</a>{" "}
						for UST.
					</p>
				</div>
			</div>
			<div className="row">
				<img src="/home_page.png" className="col-6 mx-auto"></img>
				<caption className="text-center caption">
					<a
						target="_blank"
						href="https://www.freepik.com/free-vector/stack-money-gold-coins-3d-cartoon-style-icon-coins-with-dollar-sign-wad-cash-currency-flat-vector-illustration-wealth-investment-success-savings-economy-profit-concept_29119378.htm#query=finance&position=1&from_view=search&track=sph"
					>
						Image by pch.vector
					</a>{" "}
					on Freepik
				</caption>
			</div>
		</div>
	);
}

export default Home;
