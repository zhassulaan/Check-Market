import Image from 'next/image';
import styled from 'styled-components';

export default function DirectionsModal({ type, close }) {
	let content = null;

	if (type.id === 1)
		content = <div className='module-content'>
			<img src="/home/directions/image1.png" alt="Противокражные системы" className='module-image'/>
			<div className='module-header'>
				<h2 className='module-title'>{ type.text }</h2>
			</div>
			<div className='module-text'>
				<p>Оборудование для защиты товаров находящихся в открытом доступе. Данное оборудование идеально подходит для магазинов одежды и обуви, продуктовых магазинов, аудио-видео магазинов.</p>
				<br />
				<p>Мы предлагаем широкий ассортимент девайсов, предназначенных для защиты ваших товаров – от датчиков и этикеток до потивокражных ворот/антенн.</p>
			</div>
		</div>;

	else if (type.id === 2)
		content = <div className='module-content'>
			<img src="/home/directions/image2.png" alt="Автоматизация торговли" className='module-image'/>
			<div className='module-header'>
				<h2 className='module-title'>{ type.text }</h2>
			</div>
			<div className='module-text'>
				<p>Оборудование для автоматизации торговли: чековые принтеры, принтеры этикеток, сканеры штрих-кодов, Pos-системы.</p>
				<br/>
				<p>Мы также предлагаем <b>уникальное</b> решение для Вашего бизнеса в виде специализированного программного обеспечения "<b><span>ТОРГСОФТ</span></b>". Это – простая и функциональная компьютерная программа для Торговли и Складского учета с использованием штрих-кодов.</p>
			</div>
		</div>;

	else if (type.id === 3)
		content = <div className='module-content'>
			<img src="/home/directions/image3.png" alt="Подсчёт посетителей" className='module-image'/>
			<div className='module-header'>
				<h2 className='module-title'>{ type.text }</h2>
			</div>
			<div className='module-text'>
				<p>Счетчик SM COUNTER (СМ КАУНТЕР) - маленький, питается от батареек и не требует подведения проводов. Применяется для подсчета посетителей в магазинах (торговых и выставочных центрах, библиотеках, и других местах) для обеспечения объективной информацией при принятии маркетинговых решений и повышения прибыльности торгового бизнеса. Устанавливается на входе или выходе из торгового зала в магазинах, на выставках.</p>
			</div>
		</div>;

	else if (type.id === 4)
		content = <div className='module-content'>
			<img src="/home/directions/image4.png" alt="Расходный материал" className='module-image'/>
			<div className='module-header'>
				<h2 className='module-title'>{ type.text }</h2>
			</div>
			<div className='module-text'>
				<p><b>Чековая лента</b> предназначена для контрольно-кассовых машин,пос-терминалов и фискальных регистраторов и представляет собой маленький рулон, внутри которого располагается втулка, или ролик. У каждого рулона есть своя индивидуальная характеристика: тип ленты, ширина, внешний и внутренний диаметры рулончика. 
				<br />
				<p>Благодаря этим параметрам можно определить, для какой контрольно-кассовой машины предназначена именно эта чековая лента. Нередко один вид ленты подходит к нескольким кассовым аппаратам одного производителя. Ширина чековой ленты может составлять от 44 до 80 миллиметров.</p>
				<br />
				<p><b>Термоэтикетки</b> сегодня стали неотъемлемой частью современной торговли: вся расфасовка продукции на полках крупных магазинов, взвешивание фруктов и овощей в супермаркетах, складская упаковка и фасовка - все эти процессы напрямую зависят от наличия такого расходного материала как термоэтикетка.</p>
				<br />
				<p>Важнейшим плюсом использования термоэтикетки в торговле является возможность мгновенного нанесения необходимой информации о том или ином товаре. Оперативно нанести печать высокого качества позволяют две технологии печати: термопечать или термотрансферная печать этикеток. Таким образом и появилось название этого класса продукции - термоэтикетки. </p></p>
			</div>
		</div>;

	return (
		<Wrapper>
			<div className='module-container'>
				<div className='module-header'>
					<h2 className='module-title'>{ type.text }</h2>
				</div>

				{ content }

				<div className='close-icon button' onClick={ close }>
					<svg width="32" height="32" viewBox="0 0 32 32" stroke={ (window.innerWidth > 992) ? "var(--clr-white)" : "var(--clr-black)" } fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1L30.9999 31" stroke-width="2"/>
						<path d="M31 1L1 31" stroke-width="2"/>
					</svg>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	padding: 3.75rem 0 6.25rem;
	overflow-y: auto;
	z-index: 10;

	.module-container {
		position: relative;
		width: 72.5rem;
		background: var(--clr-white);
		font-family: 'Open Sans';
		font-style: normal;
		margin: auto;
		padding: 3.125rem 3.75rem 4.375rem;
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

	.module-content {
		display: flex;
		justify-content: space-between;
	}

	.module-content .module-header {
		display: none;
	}

	.module-image {
		width: 18.75rem;
		height: 18.75rem;
	}

	.module-text {
		width: 41.25rem;
	}

	.module-text span {
		color: var(--clr-primary-1);
	}

	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	

	@media (max-width: 1440px) {
		padding-top: 3.125rem;

		.module-container {
			width: 63.25rem;
		}

		.module-title {
			line-height: 2.8125rem;
			font-size: 27px;
		}

		p {
			line-height: 2.1875rem;
			font-size: 18px;
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
			padding: 2.8125rem 3.125rem 4.0625rem;
		}

		.module-header {
			margin-bottom: 2.5rem;
			padding-bottom: 1.25rem;
		}

		.module-title {
			line-height: 2.5rem;
			font-size: 24px;
		}

		.module-image {
			width: 17.5rem;
			height: 17.5rem;
		}

		p {
			line-height: 1.875rem;
			font-size: 17px;
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
			padding: 2.5rem 1.875rem;
			border-radius: 0.625rem;
		}

		.module-header {
			display: none;
			margin: 1.875rem 0 1.25rem;
			padding: 1.25rem 0 0;
		}

		.module-header:before {
			top: 0;
			left: 0;
		}

		.module-title {
			line-height: 1.875rem;
			text-align: center;
			font-size: 20px;
		}

		.module-content {
			flex-direction: column;
		}

		.module-content .module-header {
			display: block;
		}

		.module-image {
			width: 15rem;
			height: 15rem;
			margin: 0 auto;
		}

		.module-text {
			width: 100%;
		}

		p {
			line-height: 1.5625rem;
			font-size: 15px;
		}

		.close-icon {
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 0.9375rem;
			height: 0.9375rem;
		}
	}

	@media (max-width: 650px) {
		.module-container {
			width: 88.889vw;
			padding: 1.875rem 1.25rem;
		}

		.module-image {
			width: 14.375rem;
			height: 14.375rem;
		}

		.module-title {
			line-height: 1.25rem;
			font-size: 16px;
		}

		p {
			line-height: 1.3rem;
		}
	}
`