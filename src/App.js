import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AuctionDateJgb from "./components/JGB";
import Navbar from "./components/Navbar";
import AuctionDateUst from "./components/UST";

function App() {
	return (
		<main>
			<Navbar />
			<Home />
			<AuctionDateJgb />
			<AuctionDateUst />
			<Footer />
		</main>
	);
}

export default App;
