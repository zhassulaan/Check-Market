import Image from 'next/image';
import styled from 'styled-components';

export default function ReturnModal({ close }) {
	return (
		<Wrapper>
			<div className='module-container'>
				<div className='module-header'>
					<h3 className='module-title'>Условия возврата и обмена</h3>
				</div>

				<div className='main'>
					<p className='module-text'>Компания осуществляет возврат и обмен этого товара в соответствии с требованиями законодательства.</p>
					<br/>
					<p className='module-text'><b>Сроки возврата</b></p>
					<br/>
					<p className='module-text'>Возврат возможен в течение 14 дней после получения (для товаров надлежащего качества).</p>
					<br/>
					<p className='module-text'>Обратная доставка товаров осуществляется по договоренности.</p>
					<br/>
					<p className='module-text'>Согласно действующему законодательству вы можете вернуть товар надлежащего качества или обменять его, если:</p>
					<br/>
				</div>
							
				<ul className='rules'>
					<li><p className='module-text'>товар не был в употреблении и не имеет следов использования потребителем: царапин, сколов, потёртостей, пятен и т. п.;</p></li>
					<li><p className='module-text'>товар полностью укомплектован и сохранена фабричная упаковка;</p></li>
					<li><p className='module-text'>сохранены все ярлыки и заводская маркировка;</p></li>
					<li><p className='module-text'>товар сохраняет товарный вид и свои потребительские свойства.</p></li>
				</ul>
				<br/>
				
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
		width: 62.5rem;
	}

	.module-text {
		line-height: 1.875rem;
	}
	
	.module-text b {
		font-weight: 600;
	}

	.module-text span {
		color: var(--clr-primary-7);
	}

	.rules {
		list-style-type: disc;
		padding-left: 1.25rem;
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