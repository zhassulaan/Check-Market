import styled from "styled-components";
import Button from "./Button";

export default function Direction() {
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

				<div className="direction-component">
					<div className="direction-box">
						<img src="/home/image1.png" alt="Противокражные системы" />
						<div className="direction-info">
							<h4 className="direction-title">Противокражные системы</h4>
							<p className="direction-paragraph">Антенны, датчики, сейфера, защитные этикетки, тросики</p>
							<Button text={"Подробнее"}/>
						</div>
					</div>

					<div className="direction-box">
						<img src="/home/image2.png" alt="Автоматизация торговли" />
						<div className="direction-info">
							<h4 className="direction-title">Автоматизация торговли</h4>
							<p className="direction-paragraph">принтера этикеток, принтера чеков, сканеры, моноблоки</p>
							<Button text={"Подробнее"}/>
						</div>
					</div>

					<div className="direction-box">
						<img src="/home/image3.png" alt="Подсчёт посетителей" />
						<div className="direction-info">
							<h4 className="direction-title">Подсчёт посетителей</h4>
							<p className="direction-paragraph">Система для маркетинговых исследований</p>
							<Button text={"Подробнее"}/>
						</div>
					</div>

					<div className="direction-box">
						<img src="/home/image4.png" alt="Расходный материал" />
						<div className="direction-info">
							<h4 className="direction-title">Расходный материал</h4>
							<p className="direction-paragraph">Чековая лента, этикет лента, бумага ЛПУ, бумага А4</p>
							<Button text={"Подробнее"}/>
						</div>
					</div>
				</div>

				<div className="direction-footer">
					<p className="direction-paragraph">Также Вы можете скачать прайс-лист</p>
					<Button text={"Скачать прайс"}/>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center;
	padding: 1.875rem 0 7.5rem;
	
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
	
	.direction-component {
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

	.direction-footer .direction-paragraph {
		width: 35rem;
		text-align: center;
		font-size: 22px;
		font-weight: 400;
		margin: 6.5625rem auto 1.875rem;
	}
	
	.direction-footer .button {
		width: 13.125rem;
		height: 4.375rem;
		margin: 0 auto;
	}
`