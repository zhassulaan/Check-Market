import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function Reviews() {
	const data = [
		{ id: 1, name: 'Владимир', image: null, text: 'Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!', star: 5, date: '09.11.2021' },
		{ id: 2, name: 'Покупатель', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
		{ id: 3, name: 'Светлана', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
		{ id: 4, name: 'Владимир', image: null, text: 'Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!', star: 5, date: '09.11.2021' },
		{ id: 5, name: 'Покупатель', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
		{ id: 6, name: 'Светлана', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
		{ id: 7, name: 'Владимир', image: null, text: 'Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!', star: 5, date: '09.11.2021' },
		{ id: 8, name: 'Покупатель', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
		{ id: 9, name: 'Светлана', image: null, text: 'Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество', star: 5, date: '23.06.2021' },
	]

	const [element, setElement] = useState(3);

	const handleClick = async(ev) => {
		ev.preventDefault();
		setElement(Number(ev.target.id));
	}

	setTimeout(function() { 
		(data.length <= element) ? 
			setElement(3)
				:
			setElement(element + 3)
	}, 5000);

	const previous = (element / 3 - 1);
	const next = Math.ceil(data.length / 3) - (element / 3);

	return (
		<Wrapper>
			<div className='header'>
				<h3 className='title'>Отзывы наших клиентов</h3>

				<div className='icons'>
					<Image src='/modal/rectangle.svg' alt='rectangle' width={ 15 } height={ 15 } layout='fixed' />
					<Image src='/modal/triangle.svg' alt='triangle' width={ 40 } height={ 15 } layout='fixed' />
					<Image src='/modal/ellipse.svg' alt='ellipse' width={ 15 } height={ 15 } layout='fixed' />
				</div>
						
				<p className='subtitle'>Искреннее мнение наших клиентов о нас формирует один из важнейших аспектов компании, а именно имидж. Поэтому для нас так важно неизменно держать высокий уровень сервиса, предоставляя вам только лучшие условия для сотрудничества.</p>
				<br/>
				<p className='bold-subtitle'>Благодарим вас за ваш фидбэк!</p>
			</div>

			<div className='comments-content'>
				{ data.map(comment =>
					(element >= comment.id && (element - 3) < comment.id) ?
						<div style={{ position: 'relative' }} className='comment'>
							<img src='/home/comment/comment.png' alt='comment background' className='comment-background' />
								
							<div className='comment-data'>
								{ (comment.image === null) ?
									<img src='/home/comment/user.svg' alt='user icon' className='comment-image' />
										:
									<img src={ comment.image } alt='user icon' className='comment-image' /> 
								}

								<div className='comment-box'>
									<div>
										<p className='comment-name'>От: <span>{ comment.name }</span></p>
										<p className='comment-text'>{ comment.text }</p>
									</div>

									<div className='stars'>
										{ [...Array(comment.star)].map((e, index) =>
											<img key={ index } src='/home/comment/star.svg' alt='star number' className='comment-star' />
										) }
									</div>
								</div>
							</div>

							<p className='comment-date'>{ comment.date }</p>
						</div>
							:
						<></>
				) }

				<div className='buttons'>
					{ Array(Math.ceil(previous)).fill(true).map((item, index) => <img src='/product-images/passive.svg' key={ index } id={ (index + 1) * 3 } alt='passive' className='button' onClick={ handleClick } />) }
					<img src='/product-images/active.svg' alt='active' className='button' />
					{ Array(Math.ceil(next)).fill(true).map((item, index) => <img src='/product-images/passive.svg' key={ index } id={ (index + 1) * 3 + element } alt='passive' className='button' onClick={ handleClick } />) }
				</div>

				<div style={{ position: 'relative' }} className='comment'>
					<img src='/home/comment/comment2.png' alt='comment background' className='admin-comment-background' />
								
					<div className='admin-comment-data'>
						<div className='admin-comment-box'>
							<p className='comment-name'>От: <span>Команда ЧЕК МАРКЕТ</span></p>
							<p className='comment-text'>Спасибо за обратную связь! Очень рады сотрудничеству!</p>
						</div>

						<img src='/home/comment/logo.svg' alt='user icon' className='comment-image' />
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: grid;
	justify-content: center; 
	background-color: var(--clr-primary-8);
	padding: 7.1875rem 0;

	.header {
		width: 43.75rem; 
		margin-bottom: 2.1875rem;
	}

	.title {
		line-height: 3.75rem;
		margin-bottom: 1.25rem;
	}
  
	.icons {
		margin-bottom: 1.5625rem;
	}
  
	.bold-subtitle,
	.subtitle {
		line-height: 1.875rem;
		font-size: 22px;
	}

	.bold-subtitle {
		font-weight: 400;
	}

	.comments-content {
		width: 72.5rem;
	}
	
	.comment-background {
		margin-top: 2.1875rem;
	}

	.comment-data {
		position: absolute;
		top: 2.1875rem;
		display: flex;
	}
	
	.comment-image {
		height: 5.625rem;
		margin: 2.5rem;
	}

	.comment-box {
		margin: 2.1875rem 1.4375rem;
	}

	.comment-name,
	.comment-text {
		line-height: 2.5rem;
	}
	
	.comment-name {
		font-size: 22px;
		font-weight: 400;
	}

	.comment-name span {
		color: var(--clr-primary-1)
	}

	.comment-text {
		margin-top: 0.3125rem;
	}
	
	.comment-star {
		margin: 0.625rem 0.625rem 0 0;
	}

	.comment-date {
		position: absolute;
		top: 2.1875rem;
		right: 0;
		font-size: 18px;
		margin: 1.25rem;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1.25rem;
		margin-top: 0.9375rem;
	}

	.admin-comment-background {
		margin-top: 3.75rem;
	}

	.admin-comment-data {
		position: absolute;
		top: 3.75rem;
		right: 0;
		display: flex;
	}

	.admin-comment-box {
		text-align: right;
		margin: 2.8125rem 1.4375rem;
	}

	@media (max-width: 1440px) {
		.comments-content,
		.comment-background,
		.admin-comment-background {
			width: 69.375rem;
		}

		.comment-background,
		.admin-comment-background {
			height: 14.6875rem;
		}
	}
	
	@media (max-width: 1220px) {
		padding: 5rem 0;

		.title {
			line-height: 2.8125rem;
			font-size: 34px;
			margin-bottom: 0.9375rem;
		}
		
		.icons {
			margin-bottom: 1.25rem;
		}
		
		.icon-images img {
			width: 5rem;
			height: 4.625rem;
			margin-right: 1.25rem;
		}
		
		.subtitle,
		.bold-subtitle {
			line-height: 1.5625rem;
			font-size: 17px;
		}
		
		.comments-content,
		.comment-background,
		.admin-comment-background {
			width: 57.3125rem;
		}

		.comment-background,
		.admin-comment-background {
			height: 14.0625rem;
		}

		.comment-background {
			margin-top: 1.5625rem;
		}
		
		.comment-data {
			top: 1.5625rem;
		}

		.comment-image {
			height: 5rem;
			margin: 2.5rem;
		}
	
		.comment-box {
			margin: 2.1875rem 1.4375rem;
		}
	
		.comment-name,
		.comment-text {
			line-height: 2.1875rem;
		}
		
		.comment-name {
			font-size: 19px;
		}
	
		.comment-text {
			font-size: 17px;
		}
		
		.comment-star {
			height: 1rem;
		}
	
		.comment-date {
			top: 1.5625rem;
			font-size: 15px;
		}
	
		.admin-comment-background {
			margin-top: 2.5rem;
		}
	
		.admin-comment-data {
			top: 2.5rem;
		}
	}

	@media (max-width: 992px) {
		padding: 3.75rem 0;

		.title {
			line-height: 2.5rem;
			font-size: 30px;
			margin-bottom: 0.625rem;
		}
		
		.header img {
			height: 0.75rem;
		}
		
		.icon-images img {
			width: 4.6875rem;
			height: 5rem;
			margin-right: 0.9375rem;
		}
		
		.icons {
			margin-bottom: 0.3125rem;
		}

		.header,
		.comments-content,
		.comment-background,
		.admin-comment-background {
			width: 88.889vw;
		}
		
		.comment-background,
		.admin-comment-background {
			height: 11.25rem;
		}

		.comment-background {
			margin-top: 0.9375rem;
		}
		
		.comment-data,
		.comment-date {
			top: 0.9375rem;
		}

		.comment-image {
			height: 3.75rem;
			margin: 2.1875rem;
		}

		.comment-box {
			margin: 1.375rem 1.25rem;
		}
	
		.comment-name,
		.comment-text {
			line-height: 1.5625rem;
		}
		
		.comment-name {
			font-size: 16px;
		}
	
		.comment-text {
			height: 3.125rem;
			font-size: 14px;
		}
		
		.comment-star {
			height: 0.75rem;
		}

		.comment-date {
			font-size: 13px;
			margin: 0.9375rem;
		}

		.buttons {
			gap: 0.9375rem;
			margin-top: 0.625rem;
		}

		.buttons img {
			height: 0.9375rem;
		}
	
		.admin-comment-background {
			margin-top: 1.25rem;
		}
	
		.admin-comment-data {
			top: 1.25rem;
		}

		.admin-comment-box {
			margin: 1.5rem 1.25rem;
		}
	}

	@media (max-width: 768px) {
		.title {
			line-height: 1.875rem;
			font-size: 24px;
		}
		
		.subtitle,
		.bold-subtitle {
			line-height: 1.25rem;
			font-size: 15px;
		}
	}

	@media (max-width: 650px) {
		padding: 1.875rem 0 0;
		.header {
			display: none;
		}
		
		.comments-content {
			width: 88.889vw;
			gap: 0.625rem;
			margin: 0;
		}
		
		.comment-background,
		.admin-comment-background {
			display: none;
		}

		.comment-data {
			position: static;
			height: 10.625rem;
			background-color: var(--clr-white);
			box-shadow: 0px 1px 22px rgba(0, 0, 0, 0.05);
			border-radius: 0.625rem;
			margin-bottom: 0.625rem;
		}

		.comment-image {
			width: 3.375rem;
			height: 3.125rem;
			margin: 1.25rem 0 0 1.25rem;
		}

		.comment-box {
			display: flex;
			flex-direction: column-reverse;
			margin: 1.4375rem 1.25rem 0.9375rem;
		}

		.comment-name,
		.comment-text {
			font-size: 15px;
		}
		
		.comment-name {
			line-height: 1.25rem;
			margin: 0.5rem 0 0.9375rem;
		}
	
		.comment-text {
			height: 4.375rem;
			line-height: 1.458rem;
			margin-top: 0;
			margin-left: -4.625rem;
		}

		.comment-star {
			width: 0.9375rem;
			height: 0.9375rem;
			margin-top: 0;
		}

		.comment-date {
			top: 0;
			font-size: 15px;
			margin: 1.25rem;
		}

		.buttons {
			gap: 0.625rem;
			margin-top: 1.25rem;
		}

		.buttons .button {
			width: 0.625rem;
			height: 0.625rem;
		}

		.admin-comment-data {
			position: static;
			height: 9.375rem;
			flex-direction: row-reverse;
			background-color: var(--clr-white);
			box-shadow: 0px 1px 22px rgba(0, 0, 0, 0.05);
			border-radius: 0.625rem;
			margin-top: 1.25rem;
		}

		.admin-comment-box {
			text-align: left;
			margin: 2.125rem 1.25rem 0.9375rem;
		}

		.admin-comment-box .comment-name {
			margin: 0 0 1.9375rem;
		}
	}
`
