import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:5000";

export default function AuctionDateJgb() {
	const [bondAuctionDate, setBondAuctionDate] = useState([]);

	const parseNextAuction = (nextAuctionDate) => {
		const gmtDate = new Date(Date.parse(nextAuctionDate));
		console.log(gmtDate);
		return gmtDate.toLocaleString("en-US", {
			day: "numeric",
			month: "short",
			year: "numeric",
			timeZone: "Asia/Tokyo",
		});
	};

	useEffect(() => {
		const fetchAuctionDate = async () => {
			const url = baseUrl + "/jgb-auction-date";
			try {
				const { data } = await axios.get(url);

				console.log(data.items);
				setBondAuctionDate(data.items);
			} catch (error) {
				console.log(error.response);
			}
		};

		fetchAuctionDate();
	}, []);

	return (
		<div className="bg-main">
			<div className="container pt-3 pb-5 text-center">
				<div className="row justify-content-center">
					<h1 className="mt-3 col-8">Japanese Government Bond</h1>
				</div>
				<div className="row justify-content-center">
					<div className="col-10">
						<hr class="border-color" />
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-8 mx-auto">
						<table className="table table-light table-bordered align-middle">
							<thead className="align-middle">
								<tr>
									<th>Tenor</th>
									<th>Next Auction Date (JST)</th>
									<th>Bond Number</th>
									<th>Reopen</th>
									<th>Announcement Link</th>
								</tr>
							</thead>
							<tbody className="table-group-divider">
								{bondAuctionDate.map((bond) => {
									console.log(bond.tenor);
									return (
										<tr key={bond.tenor}>
											<th>{bond.tenor}</th>
											<td>{parseNextAuction(bond.next_auction)}</td>
											<td>{bond.bond_number}</td>
											<td>{bond.reopen_info}</td>
											<td>
												{bond.announcement_link && (
													<a
														href={bond.announcement_link}
														target="_blank"
														rel="noopener noreferrer"
													>
														Here
													</a>
												)}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
