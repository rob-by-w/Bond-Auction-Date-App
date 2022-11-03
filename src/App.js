import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AuctionDateJgb from "./components/JGB";
import Navbar from "./components/Navbar";
import AuctionDateUst from "./components/UST";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/jgb",
		element: <AuctionDateJgb />,
	},
	{
		path: "/ust",
		element: <AuctionDateUst />,
	},
]);

function App() {
	return (
		<main>
			<Navbar />
			<RouterProvider router={router} />
			{/* <Home />
			<AuctionDateJgb />
			<AuctionDateUst /> */}
			<Footer />
		</main>
	);
}

export default App;
