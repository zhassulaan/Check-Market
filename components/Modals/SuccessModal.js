import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

export default function SuccessModal({ sender, close }) {
	return (
		<Wrapper>
			{(() => {
				if (sender === 1)
					return(
						<div className="container2">
							<div className="box">
								<h3 className='title'>Спасибо! Ваш заявка принят</h3>

								<div className='icons'>
									<Image src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
									<Image src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
									<Image src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
								</div>
									
								<p className="text">Мы скоро свяжемся с Вами для уточнения деталей</p>
								
								<a href="/services" className='success-button'>
									<Button text={"Вернуться к услугам"} />
								</a>
							</div>
						</div>
					);
				else if (sender === 2)
					return(
						<div className="container2">
							<div className="box">
								<h3 className='title'>Спасибо! Ваш заявка принят</h3>

								<div className='icons'>
									<Image src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
									<Image src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
									<Image src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
								</div>
									
								<p className="text">Мы скоро с Вами свяжемся</p>
								
								<a href="/shop" className='success-button'>
									<Button text={"Вернуться к покупкам"} />
								</a>
							</div>
						</div>
					);
				else
					return (
						<div className="container">
							<div className="box">
								<div className='mobile'>
									<Image src='/modal/like.svg' alt="close button" width={211} height={190} />
								</div>

								<h3 className='title'>Спасибо! Ваш вопрос в обработке</h3>

								<div className='icons laptop'>
									<Image src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
									<Image src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
									<Image src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
								</div>
									
								<p className="text">Мы свяжемся с Вами как только найдем ответ</p>
								
								<div className='close-icon button' onClick={ close }>
									<svg viewBox="0 0 32 32" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L30.9999 31" stroke-width="2"/>
										<path d="M31 1L1 31" stroke-width="2"/>
									</svg>
								</div>
							</div>
						</div>
					);
			})()}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.container {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		padding-top: 3.75rem;
		z-index: 10;
	}
	
	.box {
		position: relative;
		width: 60.4167vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--clr-white);
		margin: 0 19.79167vw;
		padding: 9.375rem 0 8.75rem;
	}
	
	.container2 .box {
		padding: 14.375rem 0 28.125rem;
		background: transparent;
	}

	.mobile {
		display: none;
	}

	.title {
		line-height: 3.75rem;
		margin-bottom: 0.625rem;
	}

	.text {
		line-height: 2.5rem;
		margin-top: 0.9375rem;
	}

	.success-button {
		margin-top: 1.25rem;
	}

	.success-button button {
		width: 22.5rem;
		height: 4.375rem;
	}	
	
	.success-button .text {
		line-height: 1.875rem;
		font-size: 20px;
		font-weight: 700;
		margin: 0;
	}

	.close-icon {
		position: absolute;
		width: 1.875rem;
		heigth: 1.875rem;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	

	@media (max-width: 1600px) {
		.title {
			line-height: 3.125rem;
			font-size: 30px;
		}
	
		.text {
			line-height: 1.875rem;
			font-size: 16px;
		}
	}

	@media (max-width: 1280px) {
		.box {
			width: 75.806vw;
			margin: 0 12.0968vw;
		}

		.close-icon {
			width: 1.5625rem;
			heigth: 1.5625rem;
			margin-right: -4.375rem;
		}	
	}

	@media (max-width: 768px) {
		.container {
			padding: 1.875rem 0 6.25rem;
		}

		.box {
			width: 88.889vw;
			border-radius: 0.625rem;
			margin: 0 5.556vw;
			padding: 3.75rem 5.556vw 2.5rem;
		}

		.laptop {
			display: none;
		}

		.mobile {
			display: block;
		}

		.title,
		.text {
			line-height: 1.25rem;
			text-align: center;
		}

		.title {
			position: relative;
			width: 100%;
			font-size: 16px;
			color: var(--clr-primary-1);
			margin: 2.5rem 0 0;
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
	
		.text {
			font-size: 15px;
			margin-top: 1.25rem;
		}

		.close-icon {
			width: 0.9375rem;
			heigth: 0.9375rem;
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 0.9375rem;
			heigth: 0.9375rem;
			stroke: black;
		}	
	}
`