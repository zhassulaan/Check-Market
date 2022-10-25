import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	//scroll-to-top classes: fixed, bottom:0, right:0
	return (
		<Wrapper>
			{isVisible && (
				<div className='button-box' onClick={scrollToTop}>
					<svg width="24" height="36" viewBox="0 0 24 36" fill="white" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.6769 11.463L12.7778 0.325323C12.345 -0.116864 11.6551 -0.0999357 11.2213 0.325323L0.322106 11.4642C-0.107369 11.9041 -0.107369 12.6163 0.322106 13.0551C0.752668 13.4951 1.44916 13.4951 1.87972 13.0551L10.8997 3.83803V34.8749C10.8997 35.496 11.3924 36 12.0007 36C12.6089 36 13.1016 35.4959 13.1016 34.8749V3.83682L22.1216 13.0539C22.5511 13.4938 23.2486 13.4938 23.6781 13.0539C24.1075 12.6152 24.1075 11.9029 23.6769 11.463Z"/>
					</svg>
				</div>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position absolute;
	right: 18.75rem;
	margin-top: -12.5rem;

	.button-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3.75rem;
		height: 3.75rem;
		background-color: var(--clr-primary-1);
	}
	
	.button-box:hover {
		background-color: transparent;
		border: 2px solid var(--clr-primary-1);
	}
	
	.button-box:hover svg {
		fill: var(--clr-primary-1);
	}
`