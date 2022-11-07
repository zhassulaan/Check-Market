import { useState } from 'react';
import styled from 'styled-components';
import data from '../data/top-products';
import ProductBox from '../components/ProductBox';

export default function TopProducts() {
	let numb = (window.innerWidth > 545) ? 3 : 2;
	const [current, setCurrent] = useState(numb);

	const handleClick = async(ev) => {
		ev.preventDefault();
		setCurrent(Number(ev.target.id));
	}

	const previous = (current / numb - 1);
	const next = Math.ceil(data.length / numb) - (current / numb);

	// setTimeout(function() { 
	// 	(data.length <= current) ? 
	// 		setCurrent(numb)
	// 			:
	// 		setCurrent(current + numb)
	// }, 5000);

	return (
		<Wrapper>
			<div className='products'>
				{ data.map(item => {
					return(
						(current >= item.id && current - numb < item.id) ?
							<div id={ item.id }>
								<ProductBox key={ item.id } product={ item }/>
							</div>
								:
							<></>
						);
				}) }
			</div>

			<div className='buttons'>
				<img src="/product-images/left.svg" alt="previous" id={ (current !== numb) ? current - numb : current } className='arrow button' onClick={ handleClick }/>
				{ Array(Math.ceil(previous)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * numb } alt="passive" className='button' onClick={ handleClick }/>)}
				<img src="/product-images/active.svg" alt="active" className='button'/>
				{ Array(Math.ceil(next)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * numb + current } alt="passive" className='button' onClick={ handleClick }/>)}
				<img src="/product-images/right.svg" alt="next" id={ (current < data.length) ? current + numb : current } className='arrow button' onClick={ handleClick }/>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin-top: 2.5rem;

	.products {
		display: flex;
		justify-content: center;
		gap: 1.5625rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 2.5rem;
		margin-top: 4.375rem;
	}

	.arrow {
		margin: 0 0.625rem;
	}

	@media (max-width: 1440px) {
		.products {
			gap: 1.3125rem;
		}
	}

	@media (max-width: 1220px) {
		.products {
			gap: 1rem;
		}

		.buttons {
			gap: 1.875rem;
			margin-top: 3.75rem;
		}
	}
	
	@media (max-width: 992px) {
		.products {
			gap: 1.818vw;
		}
		
		.buttons {
			gap: 1.5625vw;
			margin-top: 2.5rem;
		}
		
		.buttons img {
			width: 0.9375rem;
			height: 0.9375rem;
		}
	}
	
	@media (max-width: 650px) {
		margin-top: 1.25rem;
		
		.products {
			gap: 2x2.778vw;
		}

		.buttons {
			gap: 2x2.778vw;
			margin-top: 1.25rem;
		}

		.buttons img {
			width: 0.625rem;
			height: 0.625rem;
		}

		.arrow {
			display: none;
		}
	}
`