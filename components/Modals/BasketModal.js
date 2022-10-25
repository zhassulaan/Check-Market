import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/Context';
import Button from '../Button';
import ProductItem from '../ModalProductItem';

export default function BasketModal({ close }) {
	const { state, dispatch } = useContext(Context);
	const cart = state.cart;

	const [total, setTotal] = useState();

	useEffect(() => {
		const totalArray = cart.map(item =>
			(item.quantity * item.product.price)
		)
		setTotal(totalArray.reduce((acc, curr) => acc + Number(curr), 0))
	}, [cart]);
	
	return (
	  <Wrapper>
			{ (cart.length) ?
				<div className='module-container'>
					<div className='module-header'>
						<h3 className='module-title'>Корзина</h3>
					</div>

					<div className="module-content">
						{cart.map(item => 
							<ProductItem product={ item.product } quantity={ item.quantity }/>
						) }
					</div>

					<div className="module-footer">
						<div className="module-payment">
							<p className='module-text'>К оплате:</p>
							<h3>{total}</h3>
						</div>

						{ (total > 10000) ? 
							<a href="/basket">
								<div className="module-button">
									<Button text={ "Оформить заказ" }/>
								</div>
							</a>
								:
							<div className="module-button">
								<Button text={ "Оформить заказ" }/>
							</div>
						}

						{ (total < 10000) ?
							<p className='module-requirements'>Минимальная сумма заказа 10000 тг.</p>
								:
							<></>
						}
					</div>

					<div className='close-icon button' onClick={ close }>
						<img src='/modal/close.svg' alt="close button" width={30} height={30} />
					</div>
				</div>
					:
				<div className='module-container center'>
					<h3 className='module-title'>Ваша корзина пуста</h3>
					<div className="module-text">Выберите необходимые товары, чтобы пополнить её</div>
					<a href="/shop/catalog/1">
						<div className="module-button">
							<Button text={"Начать покупки"}/>
						</div>
					</a>

					<div className='close-icon button' onClick={ close }>
						<img src='/modal/close.svg' alt="close button" width={30} height={30} />
					</div>
				</div>
			}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	padding: 3.75rem 0 5.625rem;
	overflow-y: auto;
	z-index: 10;

	.module-container {
		position: relative;
		width: 72.5rem;
		background: var(--clr-white);
		margin: auto;
		padding: 3.125rem 3.75rem 5.625rem;
	}

	.module-container.center {
		text-align: center;
		padding: 4.375rem 3.75rem 5rem;
	}

	.module-header {
		position: relative;
		margin-bottom: 3.125rem;
		padding-bottom: 1.875rem;
	}
	
	.module-header .module-title {
		color: var(--clr-primary-1);
	}

	.module-title {
		line-height: 3.125rem;
		font-size: 30px;
		font-weight: 600;
	}

	.module-content {
		position: relative;
	}

	.module-header:before,
	.module-content:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		background-color: var(--clr-primary-4);
	}

	.module-footer {
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-top: 2.5rem;
	}

	.module-text {
		line-height: 2.5rem;
	}

	.center .module-text {
		padding: 1.25rem 0 1.875rem;
	}

	.module-payment h3 {
		line-height: 3.125rem;
	}

	.module-button {
		width: 21.25rem;
		height: 4.375rem;
		margin-top: 1.25rem;
	}

	.center .module-button {
		margin: auto;
	}

	.module-requirements {
		position: absolute;
		line-height: 2.5rem;
		font-size: 18px;
		color: var(--clr-primary-1);
		bottom: -3.75rem;
	}

	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	
`