import { useState } from "react";
import styled from "styled-components";

export default function Reviews() {
	const data = [
		{ id: 1, name: 'Владимир', image: null, text: "Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!", star: 5, date: "09.11.2021" },
		{ id: 2, name: 'Покупатель', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" },
		{ id: 3, name: 'Светлана', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" },
		{ id: 4, name: 'Владимир', image: null, text: "Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!", star: 5, date: "09.11.2021" },
		{ id: 5, name: 'Покупатель', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" },
		{ id: 6, name: 'Светлана', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" },
		{ id: 7, name: 'Владимир', image: null, text: "Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!", star: 5, date: "09.11.2021" },
		{ id: 8, name: 'Покупатель', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" },
		{ id: 9, name: 'Светлана', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021" }
	]

	const [element, setElement] = useState(3);

	const handleSubmit = async(ev) => {
		ev.preventDefault();
		setElement(Number(ev.target.id));
	}

	const previous = (element / 3 - 1);
	const next = Math.ceil(data.length / 3) - (element / 3);

	return (
		<Wrapper>
			<div className='header'>
				<h3 className='title'>Отзывы наших клиентов</h3>

				<div className='icons'>
					<img src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
					<img src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
					<img src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
				</div>
						
				<p className='subtitle'>Искреннее мнение наших клиентов о нас формирует один из важнейших аспектов компании, а именно имидж. Поэтому для нас так важно неизменно держать высокий уровень сервиса, предоставляя вам только лучшие условия для сотрудничества.</p>
				<br />
				<p className='bold-subtitle'>Благодарим вас за ваш фидбэк!</p>
			</div>

			<div className='comments-content'>
				{ data.map(comment =>
					(element >= comment.id && element - 3 < comment.id) ?
						<div style={{position: "relative"}}>
							<img src="/home/comment/comment.png" alt="comment background" className="comment-background"/>
								
							<div className="comment-data">
								{(comment.image === null) ?
									<img src="/home/comment/user.svg" alt="user icon" className="comment-image"/>
										:
									<img src={comment.image} alt="user icon" className="comment-image"/> 
								}

								<div className="comment-box">
									<p className="comment-name">От: <span>{comment.name}</span></p>
									<p className="comment-text">{comment.text}</p>

									{ [...Array(comment.star)].map((e, i) => 
										<img  key={i} src="/home/comment/star.svg" alt="star number" className="comment-star"/>
									) }
								</div>
							</div>

							<p className="comment-date">{comment.date}</p>
						</div>
							:
						<></>
				) }

				<div className='buttons'>
					{Array(Math.ceil(previous)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * 3 } alt="passive" className='button' onClick={ handleSubmit }/>)}
					<img src="/product-images/active.svg" alt="active" className='button'/>
					{Array(Math.ceil(next)).fill(true).map((item, index) => <img src="/product-images/passive.svg" id={ (index + 1) * 3 + element } alt="passive" className='button' onClick={ handleSubmit }/>)}
				</div>

				<div style={{position: "relative"}}>
					<img src="/home/comment/comment2.png" alt="comment background" className="admin-comment-background"/>
								
					<div className="admin-comment-data">
						<div className="admin-comment-box">
							<p className="comment-name">От: <span>Команда ЧЕК МАРКЕТ</span></p>
							<p className="comment-text">Спасибо за обратную связь! Очень рады сотрудничеству!</p>
						</div>

						<img src="/home/comment/logo.svg" alt="user icon" className="comment-image"/>
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
		width: 6.0625rem;
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
`