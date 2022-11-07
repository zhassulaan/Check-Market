import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const [count, setCount] = useState(0);

	// Top: 0 takes us all the way back to the top of the page
	// Behavior: smooth keeps it smooth!
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setCount(1);
	};

	useEffect(() => {
		// Button is displayed after scrolling for 500 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 500) {
				setIsVisible(true);
				setCount(1);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<Wrapper>
			<div className={ (count != 0) ? (isVisible ? 'scroll-container-active button' : 'scroll-container-nonactive') : 'scroll-container button' }>
				<div className='button-box' onClick={ scrollToTop }>
					<svg width="24" height="36" viewBox="0 0 24 36" fill="white" xmlns="http://www.w3.org/2000/svg">
						<path d="M23.6769 11.463L12.7778 0.325323C12.345 -0.116864 11.6551 -0.0999357 11.2213 0.325323L0.322106 11.4642C-0.107369 11.9041 -0.107369 12.6163 0.322106 13.0551C0.752668 13.4951 1.44916 13.4951 1.87972 13.0551L10.8997 3.83803V34.8749C10.8997 35.496 11.3924 36 12.0007 36C12.6089 36 13.1016 35.4959 13.1016 34.8749V3.83682L22.1216 13.0539C22.5511 13.4938 23.2486 13.4938 23.6781 13.0539C24.1075 12.6152 24.1075 11.9029 23.6769 11.463Z"/>
					</svg>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	@keyframes showScroll {
		0% {
			opacity: 0;
		} 100% {
			opacity: 100%;
		}
	}

	@keyframes hideScroll {
		0% {
			opacity: 100%;
		} 100% {
			opacity: 0;
		}
	}

	.scroll-container-active {
		opacity: 100%;
		animation: showScroll 0.3s linear;
	}
	
	.scroll-container-nonactive {
		opacity: 0;
		animation: hideScroll 0.3s linear;
	}
	
	.scroll-container {
		opacity: 0;
	}

	position fixed;
	right: 15.625vw;
	bottom: 2.5rem;
	z-index: 10;

	.button-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 3.75rem;
		height: 3.75rem;
		background-color: var(--clr-primary-1);
	}
	
	.button-box:hover,
	.button-box:hover svg {
		opacity: 0.9;
	}

	@media (max-width: 1440px) {
		.button-box {
			width: 3.125rem;
			height: 3.125rem;
		}

		svg {
			height: 1.75rem;
		}
	}

	@media (max-width: 1220px) {
		.button-box {
			width: 2.5rem;
			height: 2.5rem;
		}

		svg {
			height: 1.4rem;
		}
	}

	@media (max-width: 992px) {
		display: none;
	}
`