import Image from 'next/image';
import styled from "styled-components";
import TopProducts from "./TopProducts";

export default function Recomendations() {
	return (
		<Wrapper>
			<div className='header'>
				<h3 className='title'>Рекомендуемые товары</h3>

				<div className='icons'>
					<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
					<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
					<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
				</div>
						
				<p className='subtitle'>Подборка товаров от ЧЕК МАРКЕТ для процветания вашего бизнеса</p>
			</div>

			<TopProducts/>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center; 
	background-color: var(--clr-primary-8);
	padding: 7.1875rem 0;

	.header {
		width: 32rem; 
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
		font-size: 22px;
	}
	
	@media (max-width: 1220px) {
		padding: 5rem 0;

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
	}

	@media (max-width: 992px) {
		padding: 3.75rem 0;

		.header {
			width: 36.111rem;
		}
		
		.title {
			line-height: 2.5rem;
			font-size: 30px;
			margin-bottom: 0.625rem;
		}
		
		.header img {
			height: 0.75rem;
		}
		
		.icons {
			margin-bottom: 0.3125rem;
		}
		
		.subtitle {
			font-size: 16px;
		}
	}

	@media (max-width: 768px) {
		.title {
			line-height: 1.875rem;
			font-size: 24px;
		}
		
		.subtitle,
		.bold-subtitle {
			line-height: 1.25rem;
			font-size: 15px;
		}
	}
	
	@media (max-width: 650px) {
		padding: 3.125rem 0 0;
		
		.header {
			width: 88.889vw;
			text-align: left; 
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
	}
`