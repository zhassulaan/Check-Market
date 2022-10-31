import styled from "styled-components";
import Button from "./Button";

export default function Direction({ type, action }) {
	return (
		<Wrapper>
			<div>
				<div className='header'>
					<h3 className='title'>Наши направления</h3>

					<div className='icons'>
						<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
						<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
						<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
					</div>
							
					<p className='subtitle'>В настоящее время мы предлагаем широкий ассортимент решений и качественного оборудования и расходного материала в следующих категориях:</p>
				</div>

				<div className="direction-content">
					<div id={ type[0].id } className="direction-box" onClick={ action }>
						<img id={ type[0].id } src="/home/directions/image1.png" alt="Противокражные системы"/>
						<div id={ type[0].id } className="direction-info">
							<h4 id={ type[0].id } className="direction-title">Противокражные системы</h4>
							<p id={ type[0].id } className="direction-paragraph">Антенны, датчики, сейфера, защитные этикетки, тросики</p>
							<Button text={ "Подробнее" } id={ type[0].id } action={ action }/>
						</div>
					</div>

					<div id={ type[1].id } className="direction-box" onClick={ action }>
						<img id={ type[1].id } src="/home/directions/image2.png" alt="Автоматизация торговли"/>
						<div id={ type[1].id } className="direction-info">
							<h4 id={ type[1].id } className="direction-title">Автоматизация торговли</h4>
							<p id={ type[1].id } className="direction-paragraph">принтера этикеток, принтера чеков, сканеры, моноблоки</p>
							<Button text={ "Подробнее" } id={ type[1].id } action={ action }/>
						</div>
					</div>

					<div id={ type[2].id } className="direction-box" onClick={ action }>
						<img id={ type[2].id } src="/home/directions/image3.png" alt="Подсчёт посетителей"/>
						<div id={ type[2].id } className="direction-info">
							<h4 id={ type[2].id } className="direction-title">Подсчёт посетителей</h4>
							<p id={ type[2].id } className="direction-paragraph">Система для маркетинговых исследований</p>
							<Button text={ "Подробнее" } id={ type[2].id } action={ action }/>
						</div>
					</div>

					<div id={ type[3].id } className="direction-box" onClick={ action }>
						<img id={ type[3].id } src="/home/directions/image4.png" alt="Расходный материал"/>
						<div id={ type[3].id } className="direction-info">
							<h4 id={ type[3].id } className="direction-title">Расходный материал</h4>
							<p id={ type[3].id } className="direction-paragraph">Чековая лента, этикет лента, бумага ЛПУ, бумага А4</p>
							<Button text={ "Подробнее" } id={ type[3].id } action={ action }/>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	@keyframes animateIn {
		0% {
			transform: scale(1);
		} 100% {
			transform: scale(1.05);
		}
	}

	@keyframes animateDefault {
		0% {
			transform: scale(1.05);
		} 100% {
			transform: scale(1);
		}
	}

	display: grid;
	justify-content: center;
	background-color: var(--clr-white);
	padding: 1.875rem 0 0;
	
	.header {
		width: 40rem; 
		text-align: center;
		margin: 0 auto;	
	}

	.title {
		line-height: 3.75rem;
		margin-bottom: 1.25rem;
	}
  
	.icons {
		margin-bottom: 1.5625rem;
	}
  
	.subtitle {
		line-height: 1.875rem;
	}
	
	.direction-content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2.5rem;
		margin-top: 4.375rem;
	}
	
	.direction-box {
		width: 35rem;
		height: 15rem;
		display: flex;
		background-color: var(--clr-white);
		box-shadow: 0px 1px 22px rgba(0, 0, 0, 0.05);
	}

	.direction-box:hover {
		transform: scale(1.05);
		animation: animateIn 0.2s linear;
	}

	.direction-box:not(:hover) {
		transform: scale(1);
		animation: animateDefault 0.2s linear;
	}

	.direction-info {
		margin: 1.875rem 0 0 1.25rem;
	}

	.direction-title {
		line-height: 1.875rem;
		font-size: 20px;
		margin-bottom: 1.25rem;
	}

	.direction-paragraph {
		line-height: 1.5625rem;
		font-size: 18px;
		margin-bottom: 1.875rem;
	}

	.direction-box .button {
		width: 8.75rem;
		height: 3.125rem;
	}

	.direction-box .text {
		font-size: 18px;
	}

	@media (max-width: 1440px) {
		.direction-content {
			gap: 1.25rem;
		}
		
		.direction-box {
			width: 34.0625rem;
		}
	}

	@media (max-width: 1220px) {
		.title {
			line-height: 2.8125rem;
			font-size: 34px;
			margin-bottom: 0.9375rem;
		}

		.icons {
			margin-bottom: 1.25rem;
		}

		.subtitle {
			line-height: 1.5625rem;
			font-size: 17px;
		}

		.direction-content {
			gap: 1.0625rem;
			margin-top: 3.125rem;
		}

		.direction-box {
			width: 28.125rem;
			height: 12.5rem;
		}

		.direction-info {
			margin: 1.25rem 0 0 0.75rem;
		}

		.direction-title {
			line-height: 1.875rem;
			font-size: 17px;
			margin-bottom: 0.9375rem;
		}
	
		.direction-paragraph {
			line-height: 1.5625rem;
			font-size: 15px;
			margin-bottom: 1.25rem;
		}

		.direction-box .button {
			width: 7.5rem;
			height: 2.5rem;
		}
	
		.direction-box .text {
			font-size: 15px;
		}
	}

	@media (max-width: 992px) {
		padding: 0 5.55556vw;

		.title {
			line-height: 2.5rem;
			font-size: 28px;
			margin-bottom: 0.625rem;
		}

		.header {
			width: 75%;
		}

		.header img {
			height: 0.75rem;
		}
	
		.icons {
			margin-bottom: 0.3125rem;
		}
	
		.subtitle {
			font-size: 14px;
		}

		.direction-content {
			grid-template-columns: repeat(1, 1fr);
			padding: 0 5vw;
			gap: 0.611rem;
		}

		.direction-box {
			width: 100%;
			height: 8.125rem;
		}

		.direction-info {
			margin: 0.9375rem 0 0 0.625rem;
		}

		.direction-title {
			line-height: 1.5625rem;
			font-size: 16px;
			margin-bottom: 0.625rem;
		}
	
		.direction-paragraph {
			line-height: 1.25rem;
			font-size: 13px;
		}

		.direction-box .button {
			width: 6.25rem;
			height: 1.875rem;
		}
	
		.direction-box .text {
			font-size: 11px;
		}
	}

	@media (max-width: 650px) {
		background-color: var(--clr-primary-8);

		.header {
			display: none;
		}
		
		.direction-content {
			width: 88.889vw;
			gap: 0.625rem;
			margin: 0;
			padding: 1.875rem 0 0;
		}
		
		.direction-box {
			width: 88.889vw;
			border-radius: 0.625rem;
		}

		img {
			width: 5.625rem;
			height: 5.625rem;
			margin: 1.25rem 0.625rem;
		}

		.direction-info {
			margin: 1.25rem 0 0 ;
		}

		.direction-title {
			width: 7.5rem;
			line-height: 1.25rem;
			font-size: 15px;
			margin-bottom: 0.625rem;
		}

		.direction-paragraph {
			font-size: 14px;
			margin: 0;
		}

		.direction-box .button {
			display: none;
		}
	}
`