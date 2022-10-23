import styled from "styled-components";

export default function Reviews() {
	const data = [
		{name: 'Владимир', image: null, text: "Большое спасибо! Заказ доставили быстро, обслуживание на высшем уровне!", star: 5, date: "09.11.2021"},
		{name: 'Покупатель', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021"},
		{name: 'Светлана', image: null, text: "Рахмет, хорошие продавцы, честные. Вежливые. Все как на сайте, хорошее качество", star: 5, date: "23.06.2021"},
	]
	
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
				) }
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
		margin-bottom: 4.375rem;
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
			margin-bottom: 2.1875rem;
		}

	.comment-data {
		position: absolute;
		top: 0;
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
		top: 0;
		right: 0;
		font-size: 18px;
		margin: 1.25rem;
	}
`