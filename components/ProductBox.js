import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';
import Button from "./Button";

export default function ProductBox({ product }) {
	const { dispatch } = useContext(Context);

	function price(numb) {
		if (!numb) 
			return numb;

		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}

	const handleClick = e => {
		e.preventDefault();
		dispatch({
			type: "ADD_TO_CART",
			payload: product,
		})
	}
	
	return (
		<Wrapper>
			<div className='product-container'>
				{ (product.sale === null) ?
					<div></div>
						:
					<div className='product-sale'>
						<h6>-{product.sale}%</h6>
					</div>
				}

				<a href={`/shop/product/${product.id}`}>
					<img src={ product.image.src } alt="product image"/>
				</a>

				<div className='product-data'>
					<p className='product-name'>{ product.name }</p>
						
					<div className='swap'>
						{ (product.sale === null) ?
							<div className='price'>
								<p className='product-price'>{ price(product.price) } тг</p>
							</div>
								:
							<div className='price'>
								<p className='old-product-price'>{ price(product.price *  (100 - product.sale) / 100) }</p>
								<p className='product-price'>{ price(product.price) } тг</p>
							</div>
						}
						
						<p className={ (product.inStock === true) ? 'product-instock' : 'product-notinstock' }>{ (product.inStock === true) ? "В наличии" : (product.onOrder === true) ? "Под заказ" : "Нет в наличии" }</p>
					</div>
					
					{ (product.inStock === false && product.onOrder === false) ?
						<div className='product-button nonactive'>
							<Button text={ "Недоступно" }/>
						</div>
							:
						<div className='product-button' onClick={ handleClick }>
							<Button text={ "В корзину" }/>
						</div>
					}
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;

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

	.product-container {
		width: 23.125rem;
		height: 40.625rem;
		background-color: var(--clr-white);
	}

	.product-container:hover {
		transform: scale(1.05);
		animation: animateIn 0.2s linear;
	}

	.product-container:not(:hover) {
		transform: scale(1);
		animation: animateDefault 0.2s linear;
	}
	
	.product-sale {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 5rem;
		height: 5rem;
		right: 0;
		background-color: var(--clr-primary-1);
		border-radius: 50%;
		margin: 1.25rem;
	}
	
	.product-sale h6 {
		font-size: 22px;
		font-weight: 700;
		color: var(--clr-white);
	}

	img {
		width: 100%;
	}

	.product-data {
		height: 17.5rem;
		text-align: center;
		padding: 1.875rem 1.5625rem 2.5rem;
	}

	.product-name {
		height: 3.125rem;
		line-height: 1.5625rem;
		margin-bottom: 1.875rem;
	}

	.price {
		display: flex;
		justify-content: center;
		gap: 0.625rem;
		margin-bottom: 0.625rem;
	}

	.old-product-price,
	.product-price {
		line-height: 1.875rem;
		font-size: 18px;
		font-weight: 400;
	}

	.old-product-price {
		text-decoration-line: line-through;
		text-decoration-color: var(--clr-primary-1);
		color: var(--clr-primary-4);
	}
	
	.product-instock,
	.product-notinstock {
		line-height: 1.875rem;
		font-size: 16px;
		margin-bottom: 0.625rem;
	}
	
	.product-instock {
		color: var(--clr-primary-7);
	}
	
	.product-notinstock {
		color: var(--clr-primary-1);
	}

	.product-button {
		width: 14.375rem;
		height: 3.125rem;
		margin: auto;
	}

	.nonactive .button {
		background-color: var(--clr-primary-4);
	}

	.text {
		font-size: 18px;
		font-weight: 700;
	}

	@media (max-width: 1440px) {
		.product-container {
			width: 22.25rem;
			height: 39.75rem;
		}
	}

	@media (max-width: 1220px) {
		.product-container {
			width: 18.4375rem;
			height: 35.9375rem;
		}
	
		.product-sale {
			width: 4.375rem;
			height: 4.375rem;
			margin: 0.9375rem;
		}
		
		.product-sale h6 {
			font-size: 20px;
		}
	
		img {
			width: 100%;
		}
	
		.product-data {
			height: 17.5rem;
			padding: 1.5625rem 1.5625rem 2.1875rem;
		}
	
		.product-name {
			font-size: 18px;
		}
	
		.price {
			margin-top: 0.625rem;
		}
	
		.old-product-price,
		.product-price {
			line-height: 1.25rem;
			font-size: 17px;
		}
	
		.product-instock,
		.product-notinstock {
			font-size: 15px;
		}
		
		.text {
			font-size: 17px;
		}
	}

	@media (max-width: 992px) {
		.product-container {
			width: 28.418vw;
			height: calc(28.418vw + 14rem);
		}

		.product-sale {
			width: 9.23vw;
			max-width: 5rem;
			height: 4.615vw;
			max-height: 2.5rem;
			left: 0;
			border-radius: 0.625rem;
			margin: 0;
		}
		
		.product-sale h6 {
			font-size: 15px;
		}

		.product-data {
			height: 14.675rem;
			padding: 1.85675rem 1.25rem 1.875rem;
		}
	
		.product-name {
			height: 3.75rem;
			line-height: 1.25rem;
			font-size: 15px;
			margin-bottom: 1.25rem;
		}
	
		.price {
			margin-bottom: 0.3125rem;
		}
	
		.old-product-price,
		.product-price {
			line-height: 1.25rem;
			font-size: 14px;
		}

		.product-instock,
		.product-notinstock {
			line-height: 1.25rem;
			font-size: 13px;
			margin-bottom: 0.625rem;
		}
		
		.product-button {
			width: 80%;
			height: 2.5rem;
		}

		.text {
			font-size: 12px;
		}
	}
	
	@media (max-width: 650px) {
		.product-container {
			width: 9.6875rem;
			height: calc(9.6875rem + 12.188rem);
		}

		img {
			width: 100%;
			padding: 0.5rem 0.5rem 0.4375rem 0.4375rem;
		}

		.product-sale {
			width: 4.375rem;
			height: 1.875rem;
		}
		
		.product-sale h6 {
			font-size: 14px;
		}

		.product-data {
			height: 12.188rem;
			padding: 0.3125rem 0.5rem 0.625rem 0.4375rem;
		}
	
		.product-name {
			position: relative;
			height: 4.375rem;
			line-height: 1.25rem;
			font-size: 14px;
			margin-bottom: 0.3125rem;
			padding-bottom: 0.625rem;
		}

		.product-name:before {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1px;
			background-color: var(--clr-primary-4);
		}

		.swap {
			display: flex;
			flex-direction: column-reverse;
		}
	
		.price {
			margin: 0 0 1.875rem;
		}
	
		.old-product-price,
		.product-price {
			font-size: 16px;
		}

		.product-instock,
		.product-notinstock {
			font-size: 14px;
			margin-bottom: 0.3125rem;
		}
		
		.product-button {
			width: 8.75rem;
			height: 1.875rem;
		}
	}
`