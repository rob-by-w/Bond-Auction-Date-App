import React, { useState, useEffect } from "react";
import { Bars } from "react-loader-spinner";
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

export default function AuctionDateUst() {
	const [bondAuctionDate, setBondAuctionDate] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseNextAuction = (nextAuctionDate) => {
		const gmtDate = new Date(Date.parse(nextAuctionDate));
		console.log(gmtDate);
		return gmtDate.toLocaleString("en-US", {
			day: "numeric",
			month: "short",
			year: "numeric",
			timeZone: "America/New_York",
		});
	};

	useEffect(() => {
		const fetchAuctionDate = async () => {
			const url = baseUrl + "/ust-auction-date";
			try {
				const { data } = await axios.get(url);

				console.log(data);
				setBondAuctionDate(data);
			} catch (error) {
				console.log(error.response);
			}
			setIsLoading(false);
		};

		fetchAuctionDate();
	}, []);

	return (
		<div className="bg-main">
			<div className="container pt-3 pb-5 text-center">
				<div className="row justify-content-center">
					<h1 className="mt-3 col-8">US Treasury</h1>
				</div>
				<div className="row justify-content-center">
					<div className="col-10">
						<hr class="border-color" />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-8 mx-auto">
						{isLoading ? (
							<Bars
								height="8rem"
								width="10rem"
								color="#b1b2ff"
								ariaLabel="bars-loading"
								wrapperClass="loader-spinner"
								visible={true}
							/>
						) : (
							<table className="table table-light table-bordered align-middle">
								<thead className="align-middle">
									<tr>
										<th>Tenor</th>
										<th>Next Auction Date (ET)</th>
										<th>Announcement Date (ET)</th>
										<th>Settlement Date (ET)</th>
										<th>Reopen</th>
									</tr>
								</thead>
								<tbody className="table-group-divider">
									{bondAuctionDate.map((bond) => {
										console.log(bond.security_type);
										return (
											<tr key={bond.security_type}>
												<th>{bond.security_type}</th>
												<td>{parseNextAuction(bond.auction_date)}</td>
												<td>{parseNextAuction(bond.announcement_date)}</td>
												<td>{parseNextAuction(bond.settlement_date)}</td>
												<td>{bond.reopen_info}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
