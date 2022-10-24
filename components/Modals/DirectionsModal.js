import Image from 'next/image';
import styled from 'styled-components';

export default function DirectionsModal({ type, close }) {
	let content = null;
	if (type.id === 1)
		content = <div className="module-content">
			<img src="/home/directions/image1.png" alt="Противокражные системы" className='module-image'/>
			<div className="module-text">
				<p>Оборудование для защиты товаров находящихся в открытом доступе. Данное оборудование идеально подходит для магазинов одежды и обуви, продуктовых магазинов, аудио-видео магазинов.</p>
				<br />
				<p>Мы предлагаем широкий ассортимент девайсов, предназначенных для защиты ваших товаров – от датчиков и этикеток до потивокражных ворот/антенн.</p>
			</div>
		</div>;

	else if (type.id === 2)
		content = <div className="module-content">
			<img src="/home/directions/image2.png" alt="Автоматизация торговли" className='module-image'/>
			<div className="module-text">
				<p>Оборудование для автоматизации торговли: чековые принтеры, принтеры этикеток, сканеры штрих-кодов, Pos-системы.</p>
				<br/>
				<p>Мы также предлагаем <b>уникальное</b> решение для Вашего бизнеса в виде специализированного программного обеспечения "<b><span>ТОРГСОФТ</span></b>". Это – простая и функциональная компьютерная программа для Торговли и Складского учета с использованием штрих-кодов.</p>
			</div>
		</div>;

	else if (type.id === 3)
		content = <div className="module-content">
			<img src="/home/directions/image3.png" alt="Подсчёт посетителей" className='module-image'/>
			<div className="module-text">
				<p>Счетчик SM COUNTER (СМ КАУНТЕР) - маленький, питается от батареек и не требует подведения проводов. Применяется для подсчета посетителей в магазинах (торговых и выставочных центрах, библиотеках, и других местах) для обеспечения объективной информацией при принятии маркетинговых решений и повышения прибыльности торгового бизнеса. Устанавливается на входе или выходе из торгового зала в магазинах, на выставках.</p>
			</div>
		</div>;

	else if (type.id === 4)
		content = <div className="module-content">
			<img src="/home/directions/image4.png" alt="Расходный материал" className='module-image'/>
			<div className="module-text">
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
			<div className="module-container">
				<div className="module-header">
					<h2 className="module-title">{ type.text }</h2>
				</div>

				{ content }

				<div className='close-icon button' onClick={ close }>
					<Image src='/modal/close.svg' alt="close button" width={30} height={30} />
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
`