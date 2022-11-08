import { useContext } from 'react';
import styled from "styled-components";
import { Context } from '../context/Context';

export default function ProductItem({ product, quantity }) {
	const { state, dispatch } = useContext(Context);

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
				<p className='product-text'><b>Количество:</b> { quantity }</p>
				<h5 className='product-price'>{ price(productPrice * quantity) } тг.</h5>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.div`
	display: flex;
	padding-top: 2.5rem;

	.product-image {
		width: 9.375rem;
		height: 9.375rem;
	}

	.product-info-content {
		width: 27.5rem;
		margin-left: 2.5rem;
	}

	.product-title,
	.product-text {
		line-height: 1.875rem;
	}
	
	.product-title {
		font-size: 18px;
		font-weight: 600;
		margin: 0.625rem 0;
	}

	.product-text {
		font-size: 16px;
		font-weight: 400;
	}

	b {
		font-weight: 600;
	}

	.product-price {
		line-height: 2.5rem;
		font-size: 22px;
		font-weight: 700;
	}

	@media ( max-width: 1220px) {
		padding-top: 1.875rem;

		.product-image {
			width: 8.125rem;
			height: 8.125rem;
		}

		.product-info-content {
			width: 22.5rem;
			margin-left: 1.875rem;
		}
		
		.product-title {
			line-height: 1.5625rem;
			font-size: 17px;
			margin: 0.3125rem 0;
		}
	
		.product-text {
			font-size: 15px;
		}
	
		.product-price {
			line-height: 2.5rem;
			font-size: 21px;
		}
	}

	@media (max-width: 992px) {
		padding-top: 1.25rem;

		.product-image {
			width: 6.25rem;
			height: 6.25rem;
		}

		.product-info-content {
			width: 17.1875rem;
			margin-left: 0.9375rem;
		}
		
		.product-title {
			line-height: 1.25rem;
			font-size: 16px;
			margin: 0.3125rem 0;
		}
	
		.product-text {
			line-height: 1.5625rem;
			font-size: 14px;
		}
	
		.product-price {
			line-height: 1.875rem;
			font-size: 20px;
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`