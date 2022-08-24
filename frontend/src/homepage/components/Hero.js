import React from "react";

import Header from "../../shared/components/Header";
import BigButton from "../../shared/components/BigButton";

const Hero = () => {
	return (
		<>
			<div className="text-center w-full my-20">
				<Header fontSize={"text-8xl"}>CryptoGuess</Header>
				<BigButton>
					<a href="/about">What is it?</a>
				</BigButton>
			</div>
		</>
	);
};

export default Hero;
