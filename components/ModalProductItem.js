import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';

export default function ProductItem({ product, quantity }) {
	const { dispatch } = useContext(Context);

	const productPrice = product.price *  (100 - product.sale) / 100;

	function price(numb) {
		if (!numb) 
			return numb;

		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}

	return (
	 	<Wrapper>
			<img src={ product.image.src } alt="product image" className='product-image'/>

			<div className='product-info-content'>
				<h6 className='product-title'>{ product.name }</h6>
				<p className='product-text'>{ (product.inStock === true) ? "В наличии" : "Под заказ" }</p>
				<p className='product-text'>Цена: { price(productPrice) } тг.</p>
			</div>

			<div className='product-amount-content'>
				<h6 className='product-title'>Количество шт.</h6>

				<div className='product-count'>
					<div 
						className='button product-count-adder'
						onClick={ () =>
							dispatch({
								type: "DECREMENT_QUANTITY",
								payload: product,
							})
						}
					>
						-
					</div>
					<div className='product-count-number'>{ quantity }</div>
					<div 
						className='button product-count-remover'
						onClick={ () =>
							dispatch({
								type: "INCREMENT_QUANTITY",
								payload: product,
							})
						}
					>
						+
					</div>
				</div>
			</div>

			<div className='product-price-content'>
				<h6 className='product-title'>Сумма</h6>
				<p>{ price(productPrice * quantity) } тг.</p>
			</div>

			<div className='product-remove-content button'>
				{ (window.innerWidth > 650) ?
					<img src="/basket/bin.svg" alt="recycle bin"
						onClick={ () =>
							dispatch({
								type: "REMOVE_FROM_CART",
								payload: product,
							})
						}
					/>
						:
					<svg width="10" height="10" viewBox="0 0 32 32" stroke="var(--clr-black)" fill="none" xmlns="http://www.w3.org/2000/svg"
						onClick={ () =>
							dispatch({
								type: "REMOVE_FROM_CART",
								payload: product,
							})
						}	
					>
						<path d="M1 1L30.9999 31" stroke-width="2"/>
						<path d="M31 1L1 31" stroke-width="2"/>
					</svg>
				}
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.div`
	display: flex;
	padding-bottom: 3.125rem;

	@keyframes animateCounter {
		0% {
			opacity: 1;
		} 100% {
			opacity: 0.85;
		}
	}

	@keyframes animateCounterOut {
		0% {
			opacity: 0.85;
		} 100% {
			opacity: 1;
		}
	}

	.product-image {
		width: 6.875rem;
		height: 6.875rem;
	}

	.product-info-content {
		width: 18.75rem;
		margin-left: 1.875rem;
	}

	.product-title {
		line-height: 1.5625rem;
		font-size: 18px;
		font-weight: 600;
	}

	.product-text {
		line-height: 1.25rem;
		font-size: 16px;
		margin-top: 0.625rem;
	}

	.product-amount-content {
		width: 10rem;
		margin-left: 3.75rem;
	}

	.product-count {
		display: flex;
		width: 8.75rem;
		height: 3.125rem;
		margin-top: 2.1875rem;
	}

	.product-count-adder,
	.product-count-number,
	.product-count-remover {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-weight: 600;
	}

	.product-count-adder,
	.product-count-remover {
		width: 2.5rem;
		font-size: 24px;
		color: var(--clr-white);
		background-color: var(--clr-primary-1);
	}

	.product-count-adder:hover ,
	.product-count-remover:hover  {
		opacity: 0.85;
		animation: animateCounter 0.3s linear;
	}
	
	.product-count-adder:not(:hover),
	.product-count-remover:not(:hover)  {
		opacity: 1;
		animation: animateCounterOut 0.3s linear;
	}
	
	.product-count-number {
		width: 3.75rem;
		font-size: 18px;
		border-top: 1px solid var(--clr-primary-4);
		border-bottom: 1px solid var(--clr-primary-4);
	}

	.product-price-content {
		width: 10rem;
		margin-left: 5rem;
	}
	
	.product-price-content p {
		line-height: 2.5rem;
		font-size: 24px;
		margin-top: 2.5rem;
	}

	.product-remove-content {
		margin-left: 4.5625rem;
	}

	@media (max-width: 1440px) {
		.product-title,
		.product-count-number {
			font-size: 16px;
		}
	
		.product-text {
			font-size: 14px;
		}

		.product-amount-content {
			margin-left: 3.4375rem;
		}

		.product-count-adder,
		.product-count-remover,
		.product-price-content p {
			font-size: 21px;
		}

		.product-price-content {
			margin-left: 4.375rem;
		}

		.product-remove-content {
			margin-left: 2.75rem;
		}
	}

	@media (max-width: 1220px) {
		padding-bottom: 2.5rem;

		.product-image {
			width: 6.25rem;
			height: 6.25rem;
		}
	
		.product-info-content {
			margin-left: 1.25rem;
		}
	
		.product-title {
			line-height: 1.25rem;
			font-size: 15px;
		}
	
		.product-text {
			line-height: 0.9375rem;
			font-size: 13px;
		}
	
		.product-amount-content {
			margin-left: 3.125rem;
		}
	
		.product-count {
			width: 7.5rem;
			height: 2.625rem;
			margin-top: 1.875rem;
		}
	
		.product-count-adder,
		.product-count-remover {
			font-size: 20px;
		}
	
		.product-count-number {
			font-size: 15px;
		}
	
		.product-price-content {
			width: 10rem;
			margin-left: 3.75rem;
		}
		
		.product-price-content p {
			line-height: 1.875rem;
			font-size: 20px;
			margin-top: 1.875rem;
		}
	
		.product-remove-content {
			margin-left: 3.125rem;
		}
		
		.product-remove-content img {
			width: 1.5rem;
		}
	}

	@media (max-width: 992px) {
		padding-bottom: 1.875rem;

		.product-image {
			width: 5.625rem;
			height: 5.625rem;
		}
	
		.product-info-content {
			width: 9.375rem;
			margin-left: 1.25rem;
		}
	
		.product-title,
		.product-text {
			line-height: 1.25rem;
			font-size: 14px;
		}

		.product-text {
			margin-top: 0.3125rem;
		}
	
		.product-amount-content {
			width: 7.5rem;
			margin-left: 0.9375rem;
		}
	
		.product-count {
			width: 6.25rem;
			height: 2.5rem;
			margin-top: 1.25rem;
		}
	
		.product-count-adder,
		.product-count-remover {
			width: 1.875rem;
			font-size: 18px;
		}
	
		.product-count-number {
			width: 2.5rem;
			font-size: 14px;
		}
	
		.product-price-content {
			width: 5rem;
			margin-left: 0.9375rem;
		}
	
		.product-price-content p {
			line-height: 1.25rem;
			font-size: 16px;
			margin-top: 1.25rem;
		}
	
		.product-remove-content {
			margin-left: 0.625rem;
		}

		.product-remove-content img {
			width: 1rem;
		}
	}

	@media (max-width: 650px) {
		background-color: var(--clr-white);
		display: grid;
		grid-template-columns: repeat(2, max-content);
		border-radius: 0.625rem;
		padding: 1.875rem 0.625rem 1.25rem;
		margin-bottom: 0.625rem;

		.product-image {
			grid-column-start: 1;
			grid-column-end: 2;
		}

		.product-info-content {
			grid-column-start: 2;
			grid-column-end: 5;
			width: 55.556vw;
			margin-left: 2.77778vw;
		}
	
		.product-amount-content {
			grid-column-start: 1;
			grid-column-end: 3;
			width: 36.112vw;
			max-width: 9.6875rem;
			margin: 0.625rem 0 0;
		}

		.product-count {
			width: 36.112vw;
			max-width: 9.6875rem;
			margin-top: 0.625rem;
		}
	
		.product-count-adder,
		.product-count-remover {
			width: 11.112vw;
			max-width: 2.8125rem;
			font-size: 24px;
		}
	
		.product-count-number {
			width: 13.889vw;
			max-width: 4.0625rem;
		}
		
		.product-price-content {
			grid-column-start: 3;
			grid-column-end: 4;
			width: 40.278vw;
			margin: 0.625rem 0 0 1.5625rem;
		}

		.product-price-content p {
			font-size: 14px;
		}

		.product-remove-content {
			position: absolute;
			top: 0;
			right: 0;
			margin: 0.296875rem 0.625rem;
		}

		.product-remove-content img {
			width: 0.625rem;
			height: 0.625rem;
		}
	}
`