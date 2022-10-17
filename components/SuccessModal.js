import Image from 'next/image';
import styled from 'styled-components';

export default function SuccessModal({ modal }) {
	return (
		<Wrapper>
			<div className="box">
				<h3 className='title'>Спасибо! Ваш вопрос в обработке</h3>

				<div className='icons'>
					<Image src='/modal/rectangle.svg' alt="rectangle" width={15} height={15} layout='fixed' />
					<Image src='/modal/triangle.svg' alt="triangle" width={40} height={15} layout='fixed' />
					<Image src='/modal/ellipse.svg' alt="ellipse" width={15} height={15} layout='fixed' />
				</div>
					
				<p className="text">Мы свяжемся с Вами как только найдем ответ</p>
				
				<div className='close-icon button' onClick={ modal }>
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
	padding-top: 3.75rem;
	z-index: 10;

	.box {
		position: relative;
		width: 72.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--clr-white);
		margin: auto;
		padding: 9.375rem 0 8.75rem;
	}

	.title {
		line-height: 3.75rem;
		margin-bottom: 0.625rem;
	}

	.text {
		line-height: 2.5rem;
		margin-top: 0.9375rem;
	}

	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	
`