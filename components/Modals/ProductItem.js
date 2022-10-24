import { useContext } from 'react';
import styled from "styled-components";
import { Context } from '../../context/Context';

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
				<p className='product-text'>Цена: { price(productPrice) } тг.</p>
			</div>

			<div className='product-amount-content'>
				<h6 className='product-title'>Количество шт.</h6>

				<div className="product-count">
					<div 
						className='button product-count-adder'
						onClick={() =>
							dispatch({
								type: "DECREMENT_QUANTITY",
								payload: product,
							})
						}
					>
						-
					</div>
					<div className='product-count-number'>{quantity}</div>
					<div 
						className='button product-count-remover'
						onClick={() =>
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
				<img src='/basket/bin.svg' alt="recycle bin"
					onClick={() =>
						dispatch({
							type: "REMOVE_FROM_CART",
							payload: product,
						})
				 	}
				/>
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.div`
	display: flex;
	padding-bottom: 3.125rem;

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
`