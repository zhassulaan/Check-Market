import { useContext } from 'react';
import styled from "styled-components";
import { Context } from '../context/Context';
import Button from "./Button";

export default function ProductBox({ product }) {
	const { state, dispatch } = useContext(Context);

	function price(numb) {
		if (!numb) 
			return numb;

		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			type: "ADD_TO_CART",
			payload: product,
		})
	}
	
	return (
		<Wrapper>
			{ (product.sale === null) ?
				<div></div>
					:
				<div className='product-sale'>
					<h6>-{product.sale}%</h6>
				</div>
			}

			<img src={ product.image.src } alt="product image" />

			<div className='product-data'>
				<p className={'product-name'}>{ product.name }</p>
				
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
				
				<p className={(product.inStock === true) ? 'product-instock' : 'product-notinstock'}>{ (product.inStock === true) ? "В наличии" : (product.onOrder === true) ? "Под заказ" : "Нет в наличии"  }</p>
				
				{ (product.inStock === false && product.onOrder === false) ?
					<div className='product-button nonactive'>
						<Button text={ "Недоступно" }/>
					</div>
						:
					<div className='product-button' onClick={ handleSubmit }>
						<Button text={ "В корзину" }/>
					</div>
				}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;
	width: 23.125rem;
	height: 40.625rem;
	background-color: var(--clr-white);
	
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
`