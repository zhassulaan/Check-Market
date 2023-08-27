import Image from 'next/image';
import styled from 'styled-components';

export default function BlogsContainer({ currentItems, option }) {
	const firstElement = currentItems[0];

	return (
	  	<Wrapper>
			<div className='blog-box'>
				<div className='image-content'>
					<Image src={ firstElement.image } alt='blog image' width='100%' height='100%' layout='fill' />
					<div className="frame"></div>
												
					<div className='blog-date'>
						<h4>{ firstElement.date }</h4>
						<Image src='/blog-icons/arrow.svg' alt='open arrow' width={ 50 } height={ 15 } layout='fixed' />
					</div>
				</div>

				<div className='text-content'>
					<div className='text-content-header'>
						<h6 style={ (window.innerWidth > 650) ? { display: "none" } : { display: "block" } }>{ firstElement.date }</h6>
						<h6>{ option }</h6>
					</div>
					<h4 className='blog-title'>{ firstElement.title }</h4>
					<div className='blog-text'><p>{ firstElement.text1 }</p></div>
					{ option === "Статьи" ?
						<a href={ `/blog/articles/${ firstElement.id }` } className='button'>{ "Смотреть полностью >" }</a>
							:
						<a href={ `/blog/news/${ firstElement.id }` } className='button'>{ "Смотреть полностью >" }</a>
					}
				</div>
			</div>
		 	
			{ currentItems && currentItems.map(item => (
			  	(item.id !== firstElement.id) ?
				<div className='blog-box mini'>
					<div className='mini-image-content'>
						<Image src={ item.image } alt="blog image" width="100%" height="100%" layout="fill"/>
						<div className='frame'></div>
					</div>

					<div className='text-content'>
						<div className='text-content-header'>
							<h6>{ item.date }</h6>
							<h6>{ option }</h6>
						</div>
						<h4 className='blog-title'>{ item.title }</h4>
						<div className='blog-text'><p>{ item.text1 }</p></div>
						{ option === 'Статьи' ?
							<a href={ `/blog/articles/${ item.id }` } className='button'>{ 'Смотреть полностью >' }</a>
								:
							<a href={ `/blog/news/${ item.id }` } className='button'>{ 'Смотреть полностью >' }</a>
						}
					</div>
			  </div>
			  		:
				<div></div>
			))}
	  </Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 1.875rem;

	.blog-box {
		display: flex;
		justify-content: space-between;
	}
	
	.image-content {
		position: relative;
		width: 41.25rem;
		height: 21.875rem;
	}

	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		background-color: #00000050;
	}

	.blog-date {
		position: absolute;
		display: flex;
		align-items: center;
		top: 0;
		right: 0;
		margin: 1.25rem;
	}

	.blog-date h4 {
		width: 10.625rem;
		color: var(--clr-white);
	}

	.text-content {
		width: 28.75rem;
	}

	.text-content h6 {
		line-height: 1.875rem;
		font-size: 18px;
		font-weight: 600;
		color: var(--clr-primary-1);
		margin: 0.625rem 0;
	}

	.blog-title {
		position: relative;
		line-height: 2.8125rem;
		margin-bottom: 1.25rem;
		padding-bottom: 0.625rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.blog-title:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: var(--clr-primary-4);
	}

	.blog-text {
		height: 7.5rem;
		margin-bottom: 1.875rem;
	}
	
	.blog-text p {
		line-height: 1.875rem;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}

	.text-content .button {
		line-height: 1.875rem;
		font-size: 18px;
		font-weight: 400;
		color: var(--clr-primary-1);
	}

	.mini {
		margin-top: 5.625rem
	}

	.mini-image-content {
		position: relative;
		width: 16.25rem;
		height: 16.25rem;
	}

	.mini .text-content {
		width: 53.75rem;
	}

	.text-content-header {
		display: flex;
		justify-content: space-between;		
	}

	.text-content-header h6 {
		margin: 0 0 0.625rem;
	}

	.mini .blog-title {
		line-height: 3.125rem;
		font-size: 26px;
	}

	.mini .blog-text {
		height: 5.625rem;
		margin-bottom: 1.25rem;
	}
	
	.mini .blog-text p {
		-webkit-line-clamp: 3;
	}

	@media (max-width: 1440px) {
		.image-content {
			width: 39.4719828rem;
		}

		.text-content {
			width: 27.5107758rem;
		}

		.mini {
			margin-top: 4.375rem
		}

		.mini .text-content {
			width: 50.9375rem;
		}
	}
	
	@media (max-width: 1220px) {
		.image-content {
			width: 31.25rem;
			height: 19.375rem;
		}

		.blog-date {
			margin: 0.9375rem;
		}

		.blog-date h4 {
			width: 8.75rem;
			font-size: 24px;
		}
		
		.blog-date img {
			width: 2.5rem;
		}

		.text-content {
			width: 23.75rem;
		}

		.text-content h6 {
			line-height: 1.25rem;
			font-size: 16px;
		}
		
		.blog-title {
			line-height: 1.875rem;
			font-size: 24px;
		}
	
		.blog-text {
			margin-bottom: 1.25rem;
		}
		
		.blog-text p {
			font-size: 17px;
		}
	
		.text-content .button {
			line-height: 1.25rem;
			font-size: 16px;
		}

		.mini {
			margin-top: 3.75rem
		}

		.mini-image-content {
			width: 15rem;
			height: 15rem;
		}

		.mini .text-content {
			width: 40rem;
		}

		.mini .blog-title {
			line-height: 2.5rem;
			font-size: 22px;
		}
	}

	@media (max-width: 992px) {
		.image-content {
			width: 48.387vw;
			height: 36.923vw;
			max-height: 15.625rem;
		}

		.blog-date {
			margin: 0.625rem;
		}

		.blog-date h4 {
			width: 7.5rem;
			font-size: 20px;
		}
		
		.blog-date img {
			width: 2.1875rem;
		}

		.text-content {
			width: 37.298vw;
		}

		.text-content h6 {
			line-height: 0.9375rem;
			font-size: 14px;
		}
		
		.blog-title {
			line-height: 1.5625rem;
			font-size: 21px;
			margin-bottom: 0.9375rem;
		}
	
		.blog-text {
			height: 5.75rem;
			margin-bottom: 1.25rem;
		}
		
		.blog-text p {
			line-height: 1.4375rem;
			font-size: 14px;
		}
	
		.text-content .button {
			font-size: 14px;
		}

		.mini {
			margin-top: 2.5rem
		}

		.mini-image-content {
			width: 22.581vw;
			min-width: 13rem;
			height: 12.5rem;
		}

		.mini .text-content {
			width: 63.308vw;
			margin-left: 3vw;
		}

		.text-content-header h6 {
			margin-bottom: 0.3125rem;
		}

		.mini .blog-title {
			line-height: 1.5625rem;
			font-size: 19px;
		}

		.mini .blog-text {
			height: 4.125rem;
			margin-bottom: 0.9375rem;
		}
	}

	@media (max-width: 650px) {
		.blog-box {
			flex-direction: column;
			align-items: center;
		}

		.image-content,
		.mini-image-content {
			width: 100%;
			max-width: 25rem;
			height: 8.75rem;
			overflow: hidden;
		}

		.image-content,
		.mini-image-content,
		.frame {
			border-radius: 0.625rem;
		}

		.text-content,
		.mini .text-content {
			width: 100%;
			max-width: 25rem;
			background-color: var(--clr-white);
			border-radius: 0 0 0.625rem 0.625rem;
			z-index: 1;
			margin: -0.625rem 0 0;
			padding: 1.25rem 0.625rem 1.875rem;
		}

		.text-content h6 {
			line-height: 1.25rem;
			font-size: 13px;
			margin: 0 0 0.625rem;
		}
		
		.blog-date {
			display: none;
		}
		
		.blog-title,
		.mini .blog-title {
			line-height: 1.25rem;
			font-size: 15px;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			margin-bottom: 0.625rem;
			padding-bottom: 0.9375rem;
		}

		.blog-title:after {
			height: 0.9375rem;
			background-color: var(--clr-white);
			border-bottom: 1px solid var(--clr-primary-4)
		}
	
		.blog-text,
		.mini .blog-text {
			height: 3.75rem;
			margin-bottom: 0.9375rem;
		}
		
		.blog-text p {
			line-height: 1.25rem;
			font-size: 14px;
			-webkit-line-clamp: 3;
		}

		.mini {
			margin-top: 0.625rem
		}
	}
`