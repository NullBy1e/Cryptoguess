import Navbar from "../shared/components/Navbar";
import Hero from "./components/Hero";
import Vote from "./components/Vote";
import React from "react";

const Homepage = () => {
	return (
		<div className="flex flex-col mx-10 w-full max-w-container">
			<div className="relative" id="screen1">
				<Navbar />
				<Hero />
			</div>
			<div
				className="flex bg-slate-100 mx-[20vw] mt-60 rounded-lg"
				id="screen2"
			>
				<div className="mx-auto my-5">
					<Vote />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
