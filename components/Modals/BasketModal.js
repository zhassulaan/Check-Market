import { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Context } from '../../context/Context';
import Button from '../Button';
import ProductItem from '../ModalProductItem';

export default function BasketModal({ close }) {
	const { state } = useContext(Context);
	const cart = state.cart;

	const [total, setTotal] = useState();

	function price(numb) {
		if (!numb) 
		return numb;
		
		const numbFmt = new Intl.NumberFormat('ru-RU').format(numb);
		return numbFmt;
	}
	
	useEffect(() => {
		const totalArray = cart.map(item =>
			(item.quantity * item.product.price *  (100 - item.product.sale) / 100)
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

					<div className='module-content'>
						{ cart.map((item, idx) => 
							<ProductItem product={ item.product } quantity={ item.quantity } key={ idx } />
						) }
					</div>

					<div className='module-footer'>
						<div className='module-payment'>
							<p className='module-text'>К оплате:</p>
							<h3>{ price(total) } тг.</h3>
						</div>

						{ (total > 10000) ? 
							<Link href='/order'>
								<div className='module-button'>
									<Button text={ 'Оформить заказ' }/>
								</div>
							</Link>
								:
							<div className='module-button'>
								<Button text={ 'Оформить заказ' }/>
							</div>
						}

						{ (total < 10000) ?
							<p className='module-requirements'>Минимальная сумма заказа 10000 тг.</p>
								:
							<></>
						}
					</div>

					<div className='close-icon button' onClick={ close }>
						<svg width="32" height="32" viewBox="0 0 32 32" stroke="var(--clr-white)" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L30.9999 31" stroke-width="2"/>
							<path d="M31 1L1 31" stroke-width="2"/>
						</svg>
					</div>
				</div>
					:
				<div className='module-container center'>
					<h3 className='module-title'>Ваша корзина пуста</h3>
					<div className='module-text'>Выберите необходимые товары, чтобы пополнить её</div>
					<Link href='/shop/catalog/1'>
						<div className='module-button'>
							<Button text={ 'Начать покупки' }/>
						</div>
					</Link>

					<div className='close-icon button' onClick={ close }>
						<svg width="32" height="32" viewBox="0 0 32 32" stroke="var(--clr-white)" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L30.9999 31" stroke-width="2"/>
							<path d="M31 1L1 31" stroke-width="2"/>
						</svg>
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
	top: 0;
	background: rgba(0, 0, 0, 0.4);
	overflow-y: auto;
	z-index: 10;
	padding: 3.75rem 0 5.625rem;

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
		content: '';
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

	.close-icon svg {
		width: 1.875rem;
		height: 1.875rem;
	}

	@media (max-width: 1440px) {
		padding-top: 3.125rem;
		
		.module-container {
			width: 63.25rem;
			padding: 3.125rem 4.0625rem 5.625rem;
		}

		.module-title {
			line-height: 2.8125rem;
			font-size: 27px;
		}

		.module-text {
			line-height: 1.875rem;
			font-size: 14px;
		}

		.module-payment h3 {
			line-height: 2.8125rem;
			font-size: 34px;
		}
	
		.module-button {
			width: 21.25rem;
			height: 4.0625rem;
		}
	
		.module-button .text {
			font-size: 20px;
		}

		.module-requirements {
			line-height: 1.875rem;
			font-size: 16px;
		}

		.close-icon {
			margin-right: -4.125rem;
		}	
		
		.close-icon svg {
			width: 1.5625rem;
			height: 1.5625rem;
		}
	}

	@media (max-width: 1220px) {
		.module-container {
			width: 51.1875rem;
			padding: 2.5rem 2.8125rem 5rem;
		}

		.module-container.center {
			text-align: center;
			padding: 4.375rem 3.75rem 5rem;
		}
	
		.module-header {
			margin-bottom: 2.5rem;
			padding-bottom: 1.25rem;
		}

		.module-title {
			line-height: 2.5rem;
			font-size: 24px;
		}

		.module-footer {
			margin-top: 1.875rem;
		}

		.module-text {
			line-height: 1.5625rem;
			font-size: 13px;
		}

		.module-payment h3 {
			line-height: 2.5rem;
			font-size: 30px;
		}
	
		.module-button {
			width: 18.75rem;
			height: 3.75rem;
		}
	
		.module-button .text {
			font-size: 18px;
		}

		.module-requirements {
			font-size: 15px;
			bottom: -3.125rem;
		}

		.close-icon {
			margin-right: -3.4375rem;
		}	
		
		.close-icon svg {
			width: 1.25rem;
			height: 1.25rem;
		}
	}

	@media (max-width: 992px) {
		.module-container {
			width: 36.25rem;
			padding: 3.125rem 1.875rem 2.5rem;
			border-radius: 0.625rem;
		}

		.module-header {
			margin-bottom: 1.875rem;
		}

		.module-title {
			line-height: 1.875rem;
			font-size: 21px;
		}

		.center .module-text {
			padding: 0.9375rem 0 1.5625rem;
		}

		.module-footer {
			margin-top: 1.25rem;
		}

		.module-button {
			width: 15rem;
			height: 2.8125rem;
			margin-top: 0.9375rem;
		}
	
		.module-button .text {
			font-size: 16px;
		}

		.module-requirements {
			line-height: 1.25rem;
			font-size: 13px;
			bottom: -1.25rem;
		}

		svg {
			stroke: var(--clr-black);
		}

		.close-icon {
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 1.25rem;
			height: 1.25rem;
		}
	}
`