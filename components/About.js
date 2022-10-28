import styled from "styled-components";
import bg from '../public/home/home.png';

export default function About() {
	return (
		<Wrapper>
			<div className='about-content'>
				<div className='header'>
					<h3 className='title'>Что такое «ЧЕК МАРКЕТ»?</h3>

					<div className='icons'>
						<img src="/modal/rectangle.svg" alt="rectangle" width={15} height={15} layout="fixed"/>
						<img src="/modal/triangle.svg" alt="triangle" className='middle' width={40} height={15} layout="fixed"/>
						<img src="/modal/ellipse.svg" alt="ellipse" width={15} height={15} layout="fixed"/>
					</div>
						
					<p className='subtitle'>Узнайте подробнее о нашей компании</p>
				</div>

				
				<h4 className='about-title'>О Компании</h4>
				<p className='about-paragraph'>ЧЕК МАРКЕТ начал свое существование в 2012 году. Вот уже 10 лет мы являемся поставщиками товаров для автоматизации торговых процессов.</p>
				<br />
				<p className='about-paragraph'>Мы также предоставляем полный спектр услуг - консультации, проектирование, продажа оборудования, монтаж и пусконаладка систем безопасности, гарантийное и постгарантийное обслужиние, техническая поддержка.</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	background-color: var(--clr-white);
	background-image: url(${bg.src});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;  
	padding: 9.375rem 0 10rem;
	
	.about-content {
		width: 35rem;
		margin-right: 37.5rem;
	}

	.header {
		margin-bottom: 5rem;
	}

	.title {
		line-height: 3.125rem;
		margin-bottom: 1.25rem;
	}

	.icons {
		margin-bottom: 0.9375rem;
	}

	.subtitle {
		line-height: 1.875rem;
	}
	
	.about-title {
		position: relative;
		width: 10rem;
		line-height: 1.875rem;
		font-size: 24px;
		color: var(--clr-primary-1);
		padding-bottom: 0.9375rem;
		margin-bottom: 1.5625rem;
	}

	.about-title:after {
		content: "";
		position: absolute;
		width: 100%;	
		height: 1px;	
		bottom: 0;
		left: 0;
		background-color: var(--clr-primary-1);
	}

	.about-paragraph {
		line-height: 1.875rem;
	}

	@media (max-width: 1440px) {
		.about-content {
			margin-right: 34.375rem;
		}
	}

	@media (max-width: 1220px) {
		.about-content {
			width: 35rem;
			margin-right: 22.3125rem;
		}
	
		.header {
			margin-bottom: 3.75rem;
		}
	
		.title {
			line-height: 2.8125rem;
			font-size: 34px;
			margin-bottom: 0.9375rem;
		}
	
		.icons {
			margin-bottom: 0.625rem;
		}
	
		.subtitle {
			line-height: 1.25rem;
			font-size: 17px;
		}
		
		.about-title {
			width: 8.9rem;
			line-height: 1.5625rem;
			font-size: 22px;
			padding-bottom: 0.625rem;
			margin-bottom: 1.5625rem;
		}
	
		.about-paragraph {
			line-height: 1.75rem;
			font-size: 17px;
		}
	}

	@media (max-width: 992px) {
		justify-content: flex-start;
		padding: 5rem 0 5.3125rem;

		.about-content {
			width: 60vw;
			margin: 0 0 0 5.55556vw;
		}

		.header {
			margin-bottom: 3.75rem;
		}
	
		.title {
			line-height: 2.5rem;
			font-size: 28px;
			margin-bottom: 0.625rem;
		}

		img {
			height: 0.75rem;
		}
	
		.icons {
			margin-bottom: 0.3125rem;
		}
	
		.subtitle {
			font-size: 14px;
		}
		
		.about-title {
			width: 7.5rem;
			line-height: 1.25rem;
			font-size: 18px;
			margin-bottom: 1.25rem;
		}
	
		.about-paragraph {
			line-height: 1.5rem;
			font-size: 14px;
		}
	}

	@media (max-width: 650px) {
		justify-content: center;
		background-image: none;
		background-color: var(--clr-primary-8);
		padding: 1.875rem 0 3.125rem;

		.about-content {
			width: 88.889vw;
			margin: 0;
		}

		.header {
			margin-bottom: 1.25rem;
		}

		.title {
			line-height: 1.875rem;
			font-size: 18px;
			margin-bottom: 0;
		}
	  
		.icons {
			margin-bottom: 0.9375rem;
		}
		
		.icons img {
			height: 0.625rem;
		}

		.middle {
			width: 1.875rem
		}
	  
		.subtitle {
			line-height: 1.25rem;
			font-size: 15px;
		}
	
		.about-title {
			display: none;
		}

		.about-paragraph {
			line-height: 1.25rem;
			font-size: 15px;
		}
	}
`