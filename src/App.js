import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

function App() {
	return (
		<main>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inspiration&family=Open+Sans&display=swap" rel="stylesheet" />
			<Navbar />
			<h1>Content</h1>
			<h1>Footer</h1>
		</main>
	);
}

export default App;
