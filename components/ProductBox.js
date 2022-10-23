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
			<img src={ product.image.src } alt="product image" />

			<div className='product-data'>
				<p className={'product-name'}>{ product.name }</p>
				<p className='product-price'>{ price(product.price) } тг</p>
				<p className={(product.inStock === true) ? 'product-instock' : 'product-notinstock'}>{ (product.inStock === true) ? "В наличии" : (product.onOrder === true) ? "Под заказ" : "Нет в наличии"  }</p>
				{ (product.inStock === true) ?
					<div className='product-button' onClick={ handleSubmit }>
						<Button text={ "В корзину" }/>
					</div>
						:
					<div className='product-button nonactive'>
						<Button text={ "Недоступно" }/>
					</div>
				}
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 23.125rem;
	height: 40.625rem;
	background-color: var(--clr-white);
	
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
	
	.product-price,
	.product-instock,
	.product-notinstock {
		line-height: 1.875rem;
		margin-bottom: 0.625rem;
	}

	.product-instock,
	.product-notinstock {
		font-size: 16px;
	}

	.product-price {
		font-size: 18px;
		font-weight: 400;
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