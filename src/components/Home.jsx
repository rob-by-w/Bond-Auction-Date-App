import React from "react";

function Home() {
	return (
		<div className="bg-main">
			<div className="container py-3">
				<div className="row justify-content-center text-start mt-3">
					<div className="col-8">
						<h1 className="text-center">Bond Auction Date</h1>
						<p className="mt-3">
							This website will show you the next auction date of Japanese
							Government Bond (JGB) and US Treasury (UST). Offical auction
							calendars are availabe at{" "}
							<a
								target="_blank"
								href="https://www.mof.go.jp/english/policy/jgbs/auction/calendar/index.htm"
							>
								{" "}
								Japan Ministry of Finance website{" "}
								<i
									className="fa-solid fa-arrow-up-right-from-square"
									target="_blank"
								></i>
							</a>{" "}
							for JGB and{" "}
							<a
								target="_blank"
								href="https://home.treasury.gov/system/files/221/Tentative-Auction-Schedule.pdf"
							>
								U.S. Department of the Treasury website{" "}
								<i
									className="fa-solid fa-arrow-up-right-from-square"
									target="_blank"
								></i>
							</a>{" "}
							for UST.
						</p>
					</div>
					<div className="row justify-content-center text-start mt-3">
						<div className="col-8">
							<h3 className="text-center">How It Works</h3>
							<p>
								The backend of this webside is written in Python. Source code
								can be found here.
							</p>
							<p>
								For JGB's next auction date, the program uses requests module to
								crawl the webpages and beautifulsoup to extract the auction date
								and other information. The algorithm is as follow:
							</p>
							<ol className="list-group list-group-numbered list-group-flush bg-transparent">
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										The backend program will crawl across JGB Auction website
										starting from the current month.
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										It will look for all JGBs the next auction date, which is
										the closest date to today's date.
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										If it does not get the next auction date of all the JGBs, it
										will move to the next month and repeat step 2.
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										The program will end if there is no further webpage it can
										crawl or if it has collected all the next auction dates.
									</span>
								</li>
							</ol>
							<br></br>
							<p>
								The next auction date of UST is available in PDF format. The
								backend program uses requests, tabula and pandas modules. The
								workflow of the program is as follow:
							</p>
							<ol className="list-group list-group-numbered list-group-flush bg-transparent">
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										The backend program will download the PDF file using
										requests
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										Using tabula, it will convert the downloaded PDF file into
										data frame.
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0">
									<span className="ms-2 me-auto">
										Then, it will merge the converted data frame of each page
										into a single data frame.
									</span>
								</li>
								<li className="list-group-item d-flex bg-transparent border-0 align-items-start">
									<span className="ms-2 me-auto">
										It will then remove bonds that have auction date before
										today's date and find the next auction date for each
										maturity by sorting the rest of the data.
									</span>
								</li>
							</ol>
						</div>
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
