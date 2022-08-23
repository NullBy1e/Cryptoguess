import React from "react";

const Navbar = (props) => {
	const dirs = [
		["Vote", "/"],
		["About", "/about"],
		["GitHub", "#"],
	];

	var NavBarElements = dirs.map(([title, url]) => (
		<a
			key={url}
			href={url}
			className="mx-5 rounded-lg px-3 py-2 font-medium text-slate-800 hover:text-slate-800 hover:bg-slate-100"
		>
			{title}
		</a>
	));

	return (
		<nav className="flex sm:justify-center mt-10">
			<ul>{NavBarElements}</ul>
		</nav>
	);
};

export default Navbar;
