import Image from 'next/image';
import styled from 'styled-components';

export default function DeliveryModal({ close }) {
	return (
		<Wrapper>
			<div className='module-container'>
				<div className='module-header'>
					<h3 className='module-title'>Условия оплаты и доставки</h3>
				</div>

				<div className='main'>
					<p className='module-text'>Доставка "Самовывоз" — <span className='green1'>Бесплатно</span></p>
					<p className='module-text'>Обязательно связаться перед выездом на склад!</p>
					<br />
					<p className='module-text'>Транспортная компания <span className='green2'>Бесплатно при стоимости заказа от 70000 Тг.</span></p>
					<p className='module-text'>по Алматы до транспортной компании для отправки в регионы доставка бесплатная. В каждый регион у транспортной компании свои цены на доставку. Средняя цена за отправку в регион от 500 тенге за коробку 20 кг!</p>
					<br />
					<p className='module-text'>Доставка — <span className='green3'>Бесплатно</span></p>
				</div>
							
				<div className='payment_method'>
					<h6>Способы оплаты:</h6>
					<ul>
						<li><p className='module-text'>Наличными</p></li>
						<li><p className='module-text'>Безналичный расчет</p></li>
					</ul>
				</div>

				<div className='delivery_region'>
					<h6>Регионы доставки:</h6>
					<div className='regions'>
						<ul>
							<li><p className='module-text'>Акмолинская область</p></li>
							<li><p className='module-ltext'>Актюбинская область</p></li>
							<li><p className='module-ltext'>Алматинская область</p></li>
							<li><p className='module-ltext'>Жамбылская область</p></li>
							<li><p className='module-ltext'>Туркестанская область</p></li>
						</ul>

						<ul>
							<li><p className='module-text'>Актау</p></li>
							<li><p className='module-text'>Алматы</p></li>
							<li><p className='module-text'>Атырау</p></li>
							<li><p className='module-text'>Байконур</p></li>
							<li><p className='module-text'>Караганда</p></li>
						</ul>

						<ul>
							<li><p className='module-text'>Павлодар</p></li>
							<li><p className='module-text'>Петропавловск</p></li>
						</ul>
					</div>
				</div>

				<div className='close-icon button' onClick={ close }>
					<Image src="/modal/close.svg" alt="close button" width={30} height={30}/>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	padding: 3.75rem 0 4.375rem;
	overflow-y: auto;
	z-index: 10;

	.module-container {
		position: relative;
		width: 72.5rem;
		background: var(--clr-white);
		margin: auto;
		padding: 3.125rem 3.75rem;
	}

	.module-header {
		position: relative;
		margin-bottom: 3.125rem;
		padding-bottom: 1.875rem;
	}

	.module-title {
		line-height: 3.125rem;
		font-size: 30px;
		font-weight: 600;
		color: var(--clr-primary-1);
	}

	.module-header:before {
		content: "";
		bottom: 0;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: var(--clr-primary-4);
	}

	.main {
		width: 65rem;
		padding-bottom: 0.4375rem;
	}

	.module-text {
		line-height: 1.875rem;
	}

	.module-text span {
		color: var(--clr-primary-7);
	}

	.green1 {
		font-weight: 700;
	}

	.green2 {
		font-weight: 400;
	}

	.green3 {
		font-weight: 600;
	}

	.payment_method,
	.delivery_region {
		margin-top: 0.625rem;
		padding-bottom: 0.625rem;
	}

	.payment_method h6,
	.delivery_region h6 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 1.25rem;
	}

	.payment_method ul,
	.delivery_region ul {
		list-style-type: disc;
		padding-left: 1.25rem;
	}

	.regions {
		display: flex;
		gap: 5rem;
	}
	
	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	

	@media (max-width: 1440px) {}
	@media (max-width: 1220px) {}
	@media (max-width: 992px) {}
	@media (max-width: 650px) {}
`