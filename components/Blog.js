import styled from "styled-components";
import data from "../data/articles-data";

export default function Blog() {
	const articles = [];
	for (let i = 0; i < 6; i++) {
		articles[i] = data[i];
	}

	return (
		<Wrapper>
			<div className="blog-container">
				<div className="icon-images">
					<img src="/home/scanner.svg" alt="scanner" />
					<img src="/home/monitor.svg" alt="monitor" />
					<img src="/home/roll.svg" alt="roll" />
				</div>

				<div className='header'>
					<h3 className='title'>Наш блог</h3>

					<div className='icons'>
						<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
						<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
						<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
					</div>
						
					<p className='subtitle'>Читайте самые свежие статьи из мира ЧЕК МАРКЕТ</p>
				</div>

				<div className="blog-component">
					{ articles.map(article => 
						<div className="blog-box">
							<a href={`/blog/articles/${article.id}`} className='image-content'>
								<img src={article.image.src} alt="blog image" width={370} height={470} layout='fixed' />
								<div className="frame"></div>
																
								<div className='article-date'>
									<h4>{article.date}</h4>
									<img src='/blog-icons/arrow.svg' alt="open arrow" width={50} height={15} layout='fixed' />
								</div>

								<div className="article-info">
									<h6 className="article-title">{article.title}</h6>
								</div>
							</a>
						</div>
					) }
				</div>

				<a href="/blog" className="blog-link">Смотреть все статьи ></a>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center; 
	background-color: var(--clr-primary-8);
	
	.header {
		width: 22.5rem; 
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

	.blog-container {
		position: relative;
		padding: 5rem 0 2.8125rem;
	}

	.icon-images {
		position: absolute;
		top: -2.8125rem;
		right: 0;
	}
	
	.icon-images img {
		margin-right: 1.4375rem;
	}
	
	.blog-component {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.875rem 1.5625rem;
		margin: 3.125rem 0 2.5rem;
	}
	
	.blog-box {
		width: 23.125rem;
		height: 29.375rem;
		display: flex;
		background-color: var(--clr-white);
	}

	.image-content {
		position: relative;
	}

	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: #00000050;
	}

	.article-date {
		position: absolute;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
		margin: 1.875rem;
	}

	.article-date h4 {
		width: 10.625rem;
		color: var(--clr-white);
	}

	.article-info {
		position: absolute;
		width: 23.125rem;
		height: 8.125rem;
		bottom: 0;
		background-color: var(--clr-white);
	}

	.article-title {
		line-height: 1.5625rem;
		font-size: 18px;
		font-weight: 400;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 2.5rem 3.125rem 2.5rem 1.875rem;
	}

	.blog-link {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		line-height: 1.875rem;
		font-size: 22px;
		font-weight: 400;
		color: var(--clr-primary-1);
	}
`