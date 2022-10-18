import Image from 'next/image';
import styled from 'styled-components';

export default function BlogsPagination({ currentItems, option }) {
	const firstElement = currentItems[0];

	return (
	  	<Wrapper>
			<div className="blog-box">
				<div className='image-content'>
					<Image src={firstElement.image} alt="blog image" width={660} height={350} layout='fixed' />
					<div className="frame"></div>
												
					<div className='blog-date'>
						<h4>{firstElement.date}</h4>
						<Image src='/blog-icons/arrow.svg' alt="open arrow" width={50} height={15} layout='fixed' />
					</div>
				</div>

				<div className='text-content'>
					<h6>{option}</h6>
					<h4 className='blog-title'>{firstElement.title}</h4>
					<div className='blog-text'><p>{firstElement.text1}</p></div>
					{option === "Статьи" ?
						<a href={`/blog/articles/${firstElement.id}`} className='button'>Смотреть полностью ></a>
							:
						<a href={`/blog/news/${firstElement.id}`} className='button'>Смотреть полностью ></a>
					}
				</div>
			</div>
		 	
			{currentItems && currentItems.map(item => (
			  	(item.id !== firstElement.id) ?
				<div className='blog-box mini'>
					<div className='mini-image-content'>
						<Image src={item.image} alt="blog image" width={260} height={260} layout='fixed' />
						<div className="frame"></div>
					</div>

					<div className='text-content'>
						<div className='text-content-header'>
							<h6>{item.date}</h6>
							<h6>{option}</h6>
						</div>
						<h4 className='blog-title'>{item.title}</h4>
						<div className='blog-text'><p>{item.text1}</p></div>
						{option === "Статьи" ?
							<a href={`/blog/articles/${item.id}`} className='button'>Смотреть полностью ></a>
								:
							<a href={`/blog/news/${item.id}`} className='button'>Смотреть полностью ></a>
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
`