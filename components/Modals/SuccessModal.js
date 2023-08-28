import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '../Button';

export default function SuccessModal({ sender, close }) {
	return (
		<Wrapper>
			{ (() => {
				if (sender === 1)
					return(
						<div className='container2'>
							<div className='box'>
								<div className='mobile'>
									<Image src="/modal/like.svg" alt="close button" width={211} height={190}/>
								</div>

								<h3 className='title'>Спасибо! Ваш заявка принят</h3>

								<div className='icons'>
									<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
									<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
									<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
								</div>
									
								<p className='text'>Мы скоро свяжемся с Вами для уточнения деталей</p>
								
								<Link href='/services' className='success-button'>
									<Button text={ 'Вернуться к услугам' }/>
								</Link>
							</div>
						</div>
					);

				else if (sender === 2)
					return(
						<div className='container2'>
							<div className='box'>
								<div className='mobile'>
									<Image src='/modal/like.svg' alt='close button' width={ 211 } height={ 190 } />
								</div>

								<h3 className='title'>Спасибо! Ваш заявка принят</h3>

								<div className='icons'>
									<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
									<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
									<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
								</div>
									
								<p className='text'>Мы скоро с Вами свяжемся</p>
								
								<Link href='/shop' className='success-button'>
									<Button text={ 'Вернуться к покупкам' }/>
								</Link>
							</div>
						</div>
					);

				else
					return (
						<div className='container'>
							<div className='box'>
								<div className='mobile'>
									<Image src="/modal/like.svg" alt="close button" width={211} height={190}/>
								</div>

								<h3 className='title'>Спасибо! Ваш вопрос в обработке</h3>

								<div className='icons laptop'>
									<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
									<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
									<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
								</div>
									
								<p className='text'>Мы свяжемся с Вами как только найдем ответ</p>
								
								<div className='close-icon button' onClick={ close }>
									<svg viewBox="0 0 32 32" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 1L30.9999 31" stroke-width="2"/>
										<path d="M31 1L1 31" stroke-width="2"/>
									</svg>
								</div>
							</div>
						</div>
					);
			})() }
		</Wrapper>
	);
}

const Wrapper = styled.div`
	.container {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		background: rgba(0, 0, 0, 0.4);
		padding-top: 3.75rem;
		z-index: 10;
	}
	
	.box {
		position: relative;
		width: 72.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--clr-white);
		margin: 0 auto;
		padding: 9.375rem 0 8.75rem;
	}
	
	.container2 .box {
		background: transparent;
		padding: 14.375rem 0 28.125rem;
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

	@media (max-width: 1440px) {
		.box {
			width: 63.25rem;
			padding: 8.125rem 0 7.5rem;
		}
		
		.container2 .box {
			padding: 13.125rem 0 26.675rem;
		}

		.close-icon {
			margin-right: -4.125rem;
		}	
		
		.close-icon svg {
			width: 1.5625rem;
			height: 1.5625rem;
		}
	}

	@media (max-width: 1220px) {
		.box {
			width: 51.1875rem;
			padding: 6.25rem 0 5.625rem;
		}
		
		.container2 .box {
			padding: 11.25rem 0 24.8rem;
		}

		.header {
			margin-bottom: 2.1875rem;
		}
		
		.title {
			line-height: 2.8125rem;
			font-size: 34px;
			margin-bottom: 0.9375rem;
		}
		
		.icons {
			margin-bottom: 0.625rem;
		}
		
		.text {
			line-height: 1.5625rem;
			font-size: 17px;
			margin-top: 0.625rem;
		}

		.success-button {
			margin-top: 1.25rem;
		}
	
		.success-button button {
			width: 20rem;
			height: 3.75rem;
		}	
		
		.success-button .text {
			line-height: 1.5625rem;
			font-size: 17px;
		}

		.close-icon {
			margin-right: -3.4375rem;
		}	
		
		.close-icon svg {
			width: 1.25rem;
			height: 1.25rem;
		}
	}

	@media (max-width: 992px) {
		.container {
			padding: 2.5rem 0 6.25rem;
		}

		.box {
			width: 36.25rem;
			border-radius: 0.625rem;
			padding: 4.375rem 2.5rem 3.125rem;
		}

		.container2 .box {
			padding: 0 0 6.25rem;
		}

		.laptop {
			display: none;
		}

		.mobile {
			display: block;
		}

		.title,
		.text {
			text-align: center;
		}

		.title {
			position: relative;
			width: 100%;
			line-height: 1.875rem;
			font-size: 24px;
			color: var(--clr-primary-1);
			padding-top: 1.25rem;
			margin-bottom: 0;
		}

		.container .title {
			margin-top: 2.5rem;
		}

		.container title:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			top: 0;
			left: 0;
			background-color: var(--clr-primary-4);
		}

		.icons {
			display: none;
		}

		.text {
			font-size: 16px;
			margin-top: 1.25rem;
		}
		
		.container2 .text {
			margin-top: 0.625rem;
		}

		.success-button button {
			width: 17.5rem;
			height: 3.125rem;
		}	

		.success-button .text {
			font-size: 15px;
			margin: 0;
		}

		.close-icon {
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 0.9375rem;
			height: 0.9375rem;
			stroke: var(--clr-black);
		}
	}

	@media (max-width: 650px) {
		.container {
			padding: 1.875rem 5.556vw 5.625rem;
		}

		.box {
			width: 88.889vw;
		}

		.container2 .box {
			padding-bottom: 5.625rem;
		}

		.title {
			line-height: 1.25rem;
			font-size: 16px;
		}
		
		.text {
			line-height: 1.25rem;
			font-size: 15px;
		}

		.success-button button {
			width: 13.125rem;
			height: 2.5rem;
		}	

		.success-button .text {
			line-height: 1.25rem;
			font-size: 13px;
		}
	}
`