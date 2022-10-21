import styled from "styled-components";

export default function Blog() {
	return (
		<Wrapper>
			<div>
				<div className='blog-header'>
					<h3 className='title'>Наш блог</h3>

					<div className='icons'>
						<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
						<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
						<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
					</div>
					
					<p className='subtitle'>Читайте самые свежие статьи из мира ЧЕК МАРКЕТ</p>
				</div>

				<div className="blog-component">
					<div className="blog-box">
						<img src="/home/image.png" alt="Противокражные системы" />
						<div className="direction-info">
							<h4 className="direction-title">Противокражные системы</h4>
							<p className="direction-paragraph">Антенны, датчики, сейфера, защитные этикетки, тросики</p>
						</div>
					</div>

					<div className="blog-box">
						<img src="/home/image.png" alt="Автоматизация торговли" />
						<div className="direction-info">
							<h4 className="direction-title">Автоматизация торговли</h4>
							<p className="direction-paragraph">принтера этикеток, принтера чеков, сканеры, моноблоки</p>
						</div>
					</div>

					<div className="blog-box">
						<img src="/home/image.png" alt="Подсчёт посетителей" />
						<div className="direction-info">
							<h4 className="direction-title">Подсчёт посетителей</h4>
							<p className="direction-paragraph">Система для маркетинговых исследований</p>
						</div>
					</div>

					<div className="blog-box">
						<img src="/home/image.png" alt="Расходный материал" />
						<div className="direction-info">
							<h4 className="direction-title">Расходный материал</h4>
							<p className="direction-paragraph">Чековая лента, этикет лента, бумага ЛПУ, бумага А4</p>
						</div>
					</div>

					<div className="blog-box">
						<img src="/home/image.png" alt="Подсчёт посетителей" />
						<div className="direction-info">
							<h4 className="direction-title">Подсчёт посетителей</h4>
							<p className="direction-paragraph">Система для маркетинговых исследований</p>
						</div>
					</div>

					<div className="blog-box">
						<img src="/home/image.png" alt="Расходный материал" />
						<div className="direction-info">
							<h4 className="direction-title">Расходный материал</h4>
							<p className="direction-paragraph">Чековая лента, этикет лента, бумага ЛПУ, бумага А4</p>
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
	background-color: var(--clr-primary-8);
	padding: 5rem 0 7.1875rem;
	
	.blog-header {
		width: 22.5rem; 
	}

	.blog-header .title {
		line-height: 3.75rem;
		margin-bottom: 1.25rem;
	}

	.blog-header .icons {
		margin-bottom: 1.5625rem;
	}

	.blog-header .subtitle {
		line-height: 1.875rem;
	}
	
	.blog-component {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5625rem 1.875rem;
		margin-top: 3.125rem;
	}
	
	.blog-box {
		width: 23.125rem;
		height: 29.375rem;
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