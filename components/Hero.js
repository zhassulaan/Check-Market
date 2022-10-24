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
          
			  <div className='hero-text-content'>
					<h2 className="hero-title">Лидер в области автоматизации торговли</h2>
					<p className="hero-paragraph">Самые выгодные решения для Вашего бизнеса уже сегодня</p>
					
					<a href="/shop/catalog/1">
						<Button hero={ true } text={ "Открыть каталог" }/>
					</a>

					<div className="hero-icons">
						<div className="hero-item">
							<img src="/home/rectangle.svg" alt="rectangle" />
							<h6>Лучшие цены </h6>
							<p>С нами всегда выгоднее</p>
						</div>
						<div className="hero-item">
							<img src="/home/triangle.svg" alt="triangle" />
							<h6>Поддержка 24/7</h6>
							<p>Ответим в любое время суток</p>
						</div>
						<div className="hero-item">
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

const Wrapper = styled.section`
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

	.hero-text-content {
		color: var(--clr-white);
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
`