import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

export default function SubscribeModal({ modal }) {
	return (
		<Wrapper>
			<div className="box">
				<div className='mobile'>
					<Image src='/modal/like.svg' alt="close button" width={211} height={190} />
				</div>

				<h4 className='title'>Благодарим за подписку!</h4>

				<p className="paragraph">Все выгодные предложения от ЧЕК МАРКЕТ всегда с Вами</p>
				
				<a href="/">
					<Button text={"Вернуться на главную"} />
				</a>
				
				<div className='close-icon button' onClick={ modal }>
					<svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke={(window.innerWidth > 992) ? "white" : "black"} xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L30.9999 31" stroke-width="2"/>
						<path d="M31 1L1 31" stroke-width="2"/>
					</svg>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	padding-top: 3.75rem;
	z-index: 10;

	.mobile {
		display: none;
	}

	.box {
		position: relative;
		width: 60.417vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--clr-white);
		margin: auto;
		padding: 4.375rem 15.625vw 5rem;
	}

	.title,
	.paragraph {
		width: 35rem;
		text-align: center;
	}
	
	.title {
		line-height: 3.125rem;
		margin-bottom: 1.25rem;
	}

	.paragraph {
		line-height: 2.5rem;
		margin-bottom: 3.125rem;
	}

	.box button {
		width: 21.25rem;
		height: 4.375rem;
	}	
	
	.text {
		font-size: 20px;
		font-weight: 700;
	}

	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -5.729vw;
	}	

	@media (max-width: 1280px) {
		.title {
			font-size: 27px;
			width: 35rem;
			line-height: 2.5rem;
		}
	
		.paragraph {
			font-size: 17px;
			width: 35rem;
			line-height: 2.5rem;
			margin-bottom: 2.5rem;
		}
	
		.box button {
			width: 18.75rem;
			height: 3.75rem;
		}	
		
		.text {
			font-size: 17px;
		}

		.close-icon svg {
			width: 1.5625rem;
			height: 1.5625rem;
		}
	}

	@media (max-width: 992px) {
		padding-top: 1.875rem;

		.mobile {
			display: block;
		}

		.box {
			width: 88.889vw;
			border-radius: 10px;
			padding: 3.75rem 5.55556vw 2.5rem;
		}

		.box button {
			width: 12.5rem;
			height: 2.5rem;
		}	
		
		.text {
			font-size: 13px;
			font-weight: 600;
		}

		.title,
		.paragraph {
			width: 100%;
			line-height: 1.25rem;
		}
	
		.title {
			position: relative;
			font-size: 16px;
			color: var(--clr-primary-1);
			margin: 1.25rem 0;
			padding-top: 1.25rem;
		}
		
		.title:before {
			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			top: 0;
			left: 0;
			background-color: var(--clr-primary-4);
		}

		.paragraph {
			font-size: 15px;
			margin-bottom: 1.875rem;
		}

		.close-icon {
			margin: 1.25rem 1.25rem 0 0;
		}
		
		.close-icon svg {
			width: 0.9375rem;
			height: 0.9375rem;
		}
	}
`