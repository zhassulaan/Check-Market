import styled from "styled-components";

export default function Button({ hero, blog, text, id, action }) {
	return (
		<>
			{hero ?
				<Wrapper2>
					<button id={ id } className='button' onClick={ action }>
						<p id={ id } className='text'>{ text }</p>
					</button>
				</Wrapper2>
					:
				<Wrapper>
					<button id={ id } className={ blog ? 'button' : 'default-button button' } onClick={ action }>
						<p id={ id } className='text'>{  text }</p>
					</button>
				</Wrapper>
			}
		</>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	@keyframes animateBg {
		0% {
			background-color: var(--clr-primary-1);
			border: none;
		} 100% {
			background-color: var(--clr-white);
			border: 2px solid var(--clr-primary-1);
		}
	}

	@keyframes animateText {
		0% {
			color: var(--clr-white);
		} 100% {
			color: var(--clr-primary-1);
		}
	}

	@keyframes animateBgOut {
		0% {
			background-color: var(--clr-white);
			color: var(--clr-primary-1);
		} 100% {
			background-color: var(--clr-primary-1);
			border: none;
		}
	}

	@keyframes animateTextOut {
		0% {
			color: var(--clr-primary-1);
		} 100% {
			color: var(--clr-white);
		}
	}
	
	.button {
		background-color: var(--clr-primary-1);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 0.625rem;
	}
	
	.button.default-button:hover {
		background-color: var(--clr-white);
		border: 2px solid var(--clr-primary-1);
		animation: animateBg 0.3s linear;
	}
	
	.button.default-button:not(:hover) {
		background-color: var(--clr-primary-1);
		border: none;
		animation: animateBgOut 0.3s linear;
	}
	
	.button.default-button:hover .text {
		color: var(--clr-primary-1);
		animation: animateText 0.3s linear;
	}
	
	.button.default-button:not(:hover) .text {
		animation: animateTextOut 0.3s linear;
	}

	.text {
		line-height: 1.875rem;
		font-size: 22px;
		font-weight: 600;
		color: var(--clr-white);
	}
	
	@media (max-width: 992px) {
		.text {
			line-height: 1.5625rem;
			font-size: 18px;
		}
	}

	@media (max-width: 480px) {
		.text {
			line-height: 1.25rem;
			font-size: 13px;
		}
	}
`

const Wrapper2 = styled.div`
	@keyframes animateBg {
		0% {
			background-color: var(--clr-primary-1);
			border: none;
		} 100% {
			background-color: var(--clr-white);
			border: 2px solid var(--clr-primary-1);
		}
	}

	@keyframes animateText {
		0% {
			color: var(--clr-white);
		} 100% {
			color: var(--clr-primary-1);
		}
	}

	@keyframes animateBgOut {
		0% {
			background-color: var(--clr-white);
			color: var(--clr-primary-1);
		} 100% {
			background-color: var(--clr-primary-1);
			border: none;
		}
	}

	@keyframes animateTextOut {
		0% {
			color: var(--clr-primary-1);
		} 100% {
			color: var(--clr-white);
		}
	}

	.button {
		background-color: var(--clr-primary-1);
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		border-radius: 0.625rem;
	}

	.button:hover {
		background-color: var(--clr-white);
		border: 2px solid var(--clr-primary-1);
		animation: animateBg 0.2s linear;
	}
	
	.button:not(:hover) {
		background-color: var(--clr-primary-1);
		border: none;
		animation: animateBgOut 0.3s linear;
	}
	
	.button:hover .text {
		color: var(--clr-primary-1);
		animation: animateText 0.2s linear;
	}
	
	.button:not(:hover) .text {
		color: var(--clr-white);
		animation: animateTextOut 0.3s linear;
	}

	.text {
		line-height: 1.875rem;
		font-size: 22px;
		font-weight: 600;
		color: var(--clr-white);
	}

	@media (max-width: 992px) {
		.text {
			line-height: 1.5625rem;
			font-size: 18px;
		}
	}

	@media (max-width: 480px) {
		.text {
			line-height: 1.25rem;
			font-size: 13px;
		}
	}
`