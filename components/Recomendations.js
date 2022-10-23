import styled from "styled-components";
import TopProducts from "./TopProducts";

export default function Recomendations() {
	return (
		<Wrapper>
			<div className='header'>
				<h3 className='title'>Рекомендуемые товары</h3>

				<div className='icons'>
					<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
					<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
					<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
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
`