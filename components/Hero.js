import { useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Context } from '../context/Context';
import Button from '../components/Button';
import bg from '../public/home/background.png';

export default function Hero() {
	const { dispatch } = useContext(Context);
	const router = useRouter();

	const handleClick = async(ev) => {
		ev.preventDefault();
		dispatch({
			type: "SAVE_PAGE",
			payload: 0
		});
		router.push("/shop/catalog/1");
	}

	return (
		<Wrapper>
         <div className='hero'>
				<div className='logo-box'>
	           <img src="/home/logo.svg" alt="logo" className='logo'/>
				</div>
          
			  	<div className='hero-text-content'>
					<h2 className='hero-title'>Лидер в области автоматизации торговли</h2>
					<p className='hero-paragraph'>Самые выгодные решения для Вашего бизнеса уже сегодня</p>
					
					<div onClick={ handleClick }>
						<Button hero={ true } text={ "Открыть каталог" }/>
					</div>

					<div className='hero-icons'>
						<div className='hero-item'>
							<img src="/home/rectangle.svg" alt="rectangle"/>
							<h6>Лучшие цены </h6>
							<p>С нами всегда выгоднее</p>
						</div>
						<div className='hero-item'>
							<img src="/home/triangle.svg" alt="triangle"/>
							<h6>Поддержка 24/7</h6>
							<p>Ответим в любое время суток</p>
						</div>
						<div className='hero-item'>
							<img src="/home/ellipse.svg" alt="circle"/>
							<h6>Быстрая доставка</h6>
							<p>Оперативно доставим в руки</p>
						</div>
					</div>
      	   </div>
   	   </div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center;
	background-image: url(${bg.src});
	background-size: cover;
	padding-top: 6.25rem;

	@keyframes animate {
		50%, 60%, 70%, 100% {
			opacity: 100%;
		} 0%, 55%, 65% {
			opacity: 0;
		}
	}
	
	@keyframes logoAnimation {
		0% {
			top: 0;
			opacity: 0;
		} 5% {
			opacity: 1;
		} 50% {
			top: 100%;
		} 95% {
			opacity: 1;
		} 100% {
			top: 0;
			opacity: 0;
		}
	}
	
	.hero {
		display: flex;
		gap: 6.25rem;
		width: 72.5rem;
		margin: 12.5rem 0;
	}

	.logo-box {
		position: relative;
	}

	.logo {
		width: 31.25rem;
		animation: animate 1.2s linear;
	}
	
	.logo-box:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 0.3rem;
		background-color: var(--clr-primary-1);
		opacity: 0;
		animation: logoAnimation 2s linear;
	}
	
	.logo-box:active {
		animation: animate 1.2s linear;
	}
	
	.hero-text-content {
		color: var(--clr-white);
		height: 28.75rem;
	}

	.hero-title {
		line-height: 3.4375rem;
	}

	.hero-paragraph {
		line-height: 1.875rem;
		font-weight: 400;
		margin: 0.625rem 0 2.5rem;
	}

	.hero-text-content .button {
		width: 12.5rem;
		height: 3.75rem;
		border-radius: 1.25rem;
	}

	.hero-text-content .text {
		font-size: 18px;
		font-weight: 700;
	}

	.hero-icons {
		display: flex;
		margin-top: 3.75rem;
	}

	.hero-item {
		width: 11.25rem;
	}
	
	.hero-icons h6 {
		line-height: 1.875rem;
		font-size: 18px;
		font-weight: 700;
		margin: 1.25rem 0 0.625rem;
	}

	.hero-icons p {
		line-height: 1.5625rem;
		font-size: 16px;
		font-weight: 400;
	}

	@media (max-width: 1440px) {
		padding-top: 5rem;

		.hero {
			width: 69.375rem;
			gap: 5rem;	
		}

		.hero-item {
			width: 10.625rem;
		}

		.hero-icons h6 {
			font-size: 17.5px;
		}
	}
	
	@media (max-width: 1220px) {
		height: 49.15rem;

		.hero {
			width: 57.3125rem;
			gap: 2.5rem;	
			margin: 10rem 0;
		}
		
		.logo {
			width: 26.25rem;
			height: 24.15rem;
		}
		
		.hero-text-content {
			height: 24.15rem;
		}

		.hero-title {
			font-size: 30px;
			line-height: 2.8125rem;
		}

		.hero-paragraph {
			width: 25.625rem;
			line-height: 1.5625rem;
			font-size: 17px;
			margin-bottom: 1.875rem;
		}

		.hero-text-content .button {
			width: 11.25rem;
			height: 3.125rem;
			border-radius: 0.9375rem;
		}
	
		.hero-text-content .text {
			font-size: 15px;
		}

		.hero-icons {
			margin-top: 2.5rem;
		}

		.hero-item {
			width: 9.375rem;
		}

		.hero-icons h6 {
			line-height: 1.5625rem;
			font-size: 15px;
		}
		
		.hero-icons p {
			line-height: 1.25rem;
			font-size: 13px;
		}
	}

	@media (max-width: 992px) {
		height: 50rem;

		.hero {
			width: 100%;
			flex-direction: column;
			gap: 1.875rem;
			margin: 0;
		}

		.logo {
			height: 14.375rem;
			width: 15.625rem;
			margin: 1.25rem auto;
		}

		.hero-text-content {
			height: 20rem;
			text-align: center;
			margin: 1.25rem auto;
		}

		.hero-title {
			width: 30rem;
			line-height: 1.875rem;
			font-size: 24px;
		}

		.hero-paragraph {
			width: 30rem;
			line-height: 1.25rem;
			font-size: 14px;
		}

		.hero-text-content .button {
			width: 10rem;
			height: 2.5rem;
			margin: auto;
		}
	
		.hero-text-content .text {
			font-size: 13px;
		}

		.hero-icons {
			margin-top: 2.5rem;
		}

		.hero-item {
			width: 10rem;
		}
	
		.hero-icons h6 {
			line-height: 1.25rem;
			font-size: 14px;
			font-weight: 700;
			margin: 1.25rem 0 0.625rem;
		}
	
		.hero-icons p {
			line-height: 0.9375rem;
			font-size: 12px;
			font-weight: 400;
		}
	}

	@media (max-width: 650px) {
		height: 18.75rem;
		padding-top: 3.125rem;

		.hero {
			width: 11.5625rem;
			gap: 0;
		}

		.logo {
			width: 11.5625rem;
			height: 10.625rem;
			margin: 2.5rem auto;
		}

		.hero-text-content {
			display: none;
		}
	}
`