import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import data from '../data/articles-data';

export default function Blog() {
	const articles6 = [];
	const articles4 = [];
	const articles2 = [];
	for (let i = 0; i < 6; i++) {
		articles6[i] = data[i];
	}
	for (let i = 0; i < 4; i++) {
		articles4[i] = data[i];
	}
	for (let i = 0; i < 2; i++) {
		articles2[i] = data[i];
	}

	return (
		<Wrapper>
			<div className='blog-container'>
				<div className='icon-images'>
					<img src='/home/scanner.svg' alt='scanner' />
					<img src='/home/monitor.svg' alt='monitor' />
					<img src='/home/roll.svg' alt='roll' />
				</div>

				<div className='header'>
					<h3 className='title'>Наш блог</h3>

					<div className='icons'>
						<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
						<Image src='/modal/triangle.svg' alt='triangle' className='middle' width={ 40 } height={ 15 } layout='fixed' />
						<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
					</div>
						
					<p className='subtitle'>Читайте самые свежие статьи из мира ЧЕК МАРКЕТ</p>
				</div>

				<div className='blog-content'>
					{ (window.innerWidth > 992 ? articles6 : (window.innerWidth > 650 ? articles4 : articles2)).map((article, idx) => 
						<div className='blog-box' key={ idx }>
							<a href={ `/blog/articles/${article.id}` }>
								<Image src={ article.image.src } alt='blog image' className='image' width={ 370 } height={ 470 } layout='fixed' />
								<div className='frame'></div>
																
								<div className='article-date'>
									<h4>{ article.date }</h4>
									<Image src="/blog-icons/arrow.svg" alt='open arrow' width={ 50 } height={ 15 } layout='fixed' />
								</div>

								<div className='article-info'>
									<h6 className='article-title'>{ article.title }</h6>
								</div>
							</a>
						</div>
					) }
				</div>

				<Link href='/blog' className='blog-link'>{ 'Смотреть все статьи >' }</Link>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center; 
	background-color: var(--clr-primary-8);

	@keyframes animateTextRight {
		0% {
			opacity: 1;
			left: 0;
		} 100% {
			opacity: 0;
			left: 1.25rem;
		}
	}

	@keyframes animateFrame {
		0% {
			opacity: 1;
		} 100% {
			opacity: 0;
		}
	}
	
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

	.icon-images {
		position: absolute;
		top: -2.8125rem;
		right: 0;
	}
	
	.icon-images img {
		margin-right: 1.4375rem;
	}

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
	
	.blog-content {
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
		overflow: hidden;
	}

	.blog-box:hover {
		transform: scale(1.05);
		animation: animateIn 0.2s linear;
	}

	.blog-box:not(:hover) {
		transform: scale(1);
		animation: animateDefault 0.2s linear;
	}

	a {
		position: relative;
	}

	.image {
		width: 100%;
		height: 100%;
	}

	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: #00000050;
	}

	.blog-box:hover .frame {
		opacity: 0;
		animation: animateFrame 0.2s linear;
	}

	.article-date {
		position: absolute;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
		margin: 1.875rem;
	}

	.blog-box:hover .article-date {
		opacity: 0;
		animation: animateTextRight 0.2s linear;
	}

	.article-date h4 {
		width: 10.625rem;
		color: var(--clr-white);
	}

	.article-info {
		position: absolute;
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

	@media (max-width: 1440px) {
		.blog-content {
			gap: 1.25rem 0.9375rem;
		}

		.blog-box {
			width: 22.5rem;
			height: 29.0625rem;
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
		
		.icon-images img {
			width: 5rem;
			height: 4.625rem;
			margin-right: 1.25rem;
		}
		
		.subtitle {
			line-height: 1.5625rem;
			font-size: 17px;
		}

		.blog-content {
			gap: 1.25rem 0.8155rem;
		}
		
		.blog-box {
			width: 18.5625rem;
			height: 23.579rem;
		}

		.article-date h4 {
			width: 8.625rem;
			font-size: 24px;
		}
		
		.article-date img {
			width: 2.8125rem;
		}
	
		.article-info {
			height: 6.875rem;
		}

		.article-title {
			line-height: 1.5625rem;
			font-size: 17px;
			margin: 1.5625rem 3.125rem 1.5625rem 1.875rem;
		}
	
		.blog-link {
			font-size: 18px;
		}
	}

	@media (max-width: 992px) {
		.header {
			width: 100%;
		}
		
		.title {
			line-height: 2.5rem;
			font-size: 28px;
			margin-bottom: 0.625rem;
		}
		
		.header img {
			height: 0.75rem;
		}
		
		.icon-images img {
			width: 4.6875rem;
			height: 5rem;
			margin-right: 0.9375rem;
		}
		
		.icons {
			margin-bottom: 0.3125rem;
		}
		
		.blog-content {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.9375rem;
			margin: 1.875rem 0 1.25rem;
		}
		
		.blog-box,
		.image {
			width: 43vw;
			height: 50.7vw;
			max-height: 22.625rem;
		}
	
		.article-date {
			margin: 1.25rem;
		}
	
		.article-date h4 {
			font-size: 20px;
			width: 7.4375rem;
		}

		.article-date img {
			width: 2.5rem;
		}
	
		.article-info {
			width: 43vw;
			height: 6.25rem;
		}
	
		.article-title {
			line-height: 1.5rem;
			font-size: 15px;
			margin: 1.625rem 3.125rem 1.625rem 1.875rem;
		}
	
		.blog-link {
			line-height: 1.25rem;
			font-size: 16px;
		}
	}

	
	@media (max-width: 650px) {
		.icon-images {
			display: none;
		}
		
		.header {
			width: 88.889vw
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
	  
		.blog-container {
			padding: 3.125rem 0 3.75rem;
		}
		
		.blog-content {
			grid-template-columns: repeat(1, 1fr);
			gap: 0.625rem;
			margin: 1.25rem 0;
		}
		
		.blog-box,
		.image {
			width: 88.889vw;
			max-height: 20rem;
			height: 66.667vw;
		}

		.blog-box,
		.image,
		.frame {
			border-radius: 0.625rem;
		}
	
		.article-info {
			border-bottom-left-radius: 0.625rem; 
			border-bottom-right
			-radius: 0.625rem; 
		}
	
		.article-date {
			margin: 1.25rem 0.625rem;
		}
	
		.article-date h4 {
			width: 6.875rem;
		}
	
		.article-date img {
			width: 2.1875rem;
		}
	
		.article-info {
			width: 100%;
			height: 5rem;
		}
	
		.article-title {
			line-height: 1.875rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			margin: 1.5375rem 0.625rem 1.5375rem 0.625rem;
		}
	
		.blog-link {
			line-height: 1.875rem;
			font-size: 14px;
		}
	}
`
