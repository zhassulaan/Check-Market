import styled from "styled-components";

export default function About() {
	return (
		<Wrapper>
			<div>
				<div className='about-header'>
					<h3 className='title'>Что такое «ЧЕК МАРКЕТ»?</h3>

					<div className='icons'>
						<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
						<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
						<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
					</div>
					
					<p className='subtitle'>Узнайте подробнее о нашей компании</p>
				</div>

				<div className="about-text-component">
					<h4 className="about-title">О Компании</h4>
					<p className="about-paragraph">ЧЕК МАРКЕТ начал свое существование в 2012 году. Вот уже 10 лет мы являемся поставщиками товаров для автоматизации торговых процессов.</p>
					<br />
					<p className="about-paragraph">Мы также предоставляем полный спектр услуг - консультации, проектирование, продажа оборудования, монтаж и пусконаладка систем безопасности, гарантийное и постгарантийное обслужиние, техническая поддержка.</p>
				</div>
			</div>

			<img src="/home/home.png" alt="home > about image" className="about-image"/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 6.25rem 0 10rem;
	
	.about-header,
	.about-text-component {
		width: 35rem;
		margin-right: 37.5rem;
	}

	.about-header {
		margin-top: 3.125rem;
	}

	.about-header .title {
		line-height: 3.125rem;
		margin-bottom: 1.25rem;
	}

	.about-header .icons {
		margin-bottom: 0.9375rem;
	}

	.about-header .subtitle {
		line-height: 1.875rem;
	}
	
	.about-text-component {
		margin-top: 5rem;
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

	.about-image {
		position: absolute;
		right: 0;
	}
`