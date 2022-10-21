import styled from "styled-components";

export default function Button({ text, disable }) {
	return (
		<Wrapper>
			<button className="button">
				<p className="text">{text}</p>
			</button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.button {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--clr-primary-1);
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