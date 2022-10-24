import styled from "styled-components";

export default function Button({ hero, text, id, action }) {
	return (
		<>
			{hero ?
				<Wrapper2>
					<button id={id} className="button" onClick={action}>
						<p id={id} className="text">{text}</p>
					</button>
				</Wrapper2>
					:
				<Wrapper>
					<button id={id} className="button" onClick={action}>
						<p id={id} className="text">{text}</p>
					</button>
				</Wrapper>
			}
		</>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;

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