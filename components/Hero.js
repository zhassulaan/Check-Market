import styled from "styled-components";
import Button from '../components/Button';
import bg from '../public/home/background.png'

export default function Hero() {
	return (
		<Wrapper style={{
			backgroundImage: `url(${bg.src})`,
			width: '100%',
			height: '100%',
		}}>
         <div className='hero'>
           <img src="/home/logo.svg" alt="logo" className='logo'/>
           <div className='hero_text_content'>
					<h2 className="hero_title">Лидер в области автоматизации торговли</h2>
					<p className="hero_paragraph">Самые выгодные решения для Вашего бизнеса уже сегодня</p>
					
					<a href="catalog/1">
						<Button text={ "Открыть каталог" }/>
					</a>

					<div className="hero_icons">
						<div className="hero_item">
							<img src="/home/rectangle.svg" alt="rectangle" />
							<h6>Лучшие цены </h6>
							<p>С нами всегда выгоднее</p>
						</div>
						<div className="hero_item">
							<img src="/home/triangle.svg" alt="triangle" />
							<h6>Поддержка 24/7</h6>
							<p>Ответим в любое время суток</p>
						</div>
						<div className="hero_item">
							<img src="/home/ellipse.svg" alt="circle" />
							<h6>Быстрая доставка</h6>
							<p>Оперативно доставим в руки</p>
						</div>
					</div>
      	   </div>
   	   </div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	padding: 6.25rem 19.79167vw;
	
	.hero {
		display: flex;
		gap: 6.25rem;
		width: 72.5rem;
		height: 53.75rem;
		padding-top: 12.5rem;
	}

	.logo {
		width: 31.25rem;
		height: 28.75rem;
	}

	.hero_text_content {
		color: var(--clr-white);
	}

	.hero_title {
		line-height: 3.4375rem;
	}

	.hero_paragraph {
		line-height: 1.875rem;
		font-weight: 400;
		margin: 0.625rem 0 2.5rem;
	}

	.hero_text_content .button {
		width: 12.5rem;
		height: 3.75rem;
		border-radius: 1.25rem;
	}

	.hero_text_content .text {
		font-size: 18px;
		font-weight: 700;
	}

	.hero_icons {
		display: flex;
		margin-top: 3.75rem;
	}

	.hero_item {
		width: 11.25rem;
	}
	
	.hero_icons h6 {
		line-height: 1.875rem;
		font-size: 18px;
		font-weight: 700;
		margin: 1.25rem 0 0.625rem;
	}

	.hero_icons p {
		line-height: 1.5625rem;
		font-size: 16px;
		font-weight: 400;
	}
`