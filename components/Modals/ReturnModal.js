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
					<br className='br'/>
					<p className='module-text'><b>Сроки возврата</b></p>
					<br className='br'/>
					<p className='module-text'>Возврат возможен в течение 14 дней после получения (для товаров надлежащего качества).</p>
					<br className='br'/>
					<p className='module-text'>Обратная доставка товаров осуществляется по договоренности.</p>
					<br className='br'/>
					<p className='module-text'>Согласно действующему законодательству вы можете вернуть товар надлежащего качества или обменять его, если:</p>
					<br className='br'/>
				</div>
							
				<ul className='rules'>
					<li><p className='module-text'>товар не был в употреблении и не имеет следов использования потребителем: царапин, сколов, потёртостей, пятен и т. п.;</p></li>
					<li><p className='module-text'>товар полностью укомплектован и сохранена фабричная упаковка;</p></li>
					<li><p className='module-text'>сохранены все ярлыки и заводская маркировка;</p></li>
					<li><p className='module-text'>товар сохраняет товарный вид и свои потребительские свойства.</p></li>
				</ul>
				<br/>
				
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

	@media (max-width: 1440px) {
		padding-top: 3.125rem;

		.module-container {
			width: 63.25rem;
			padding: 3.125rem 3.125rem;
		}

		.module-header {
			margin-bottom: 2.8125rem;
			padding-bottom: 1.5625rem;
		}

		.module-title {
			line-height: 2.8125rem;
			font-size: 27px;
		}

		.main {
			width: 53.25rem;
		}

		.module-text {
			line-height: 1.875rem;
			font-size: 18px;
		}

		.br {
			content: "";
			display: block;
			margin: 0.75rem;
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
			padding: 2.5rem 2.5rem;
		}

		.module-header {
			margin-bottom: 2.5rem;
			padding-bottom: 1.25rem;
		}

		.module-title {
			line-height: 2.5rem;
			font-size: 24px;
		}

		.main {
			width: 41.9325rem;
		}

		.module-text {
			line-height: 1.75rem;
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
			border-radius: 0.625rem;
			padding: 3.75rem 5.556vw 3.125rem;
		}

		.module-header {
			margin-bottom: 1.875rem;
		}

		.module-title {
			text-align: center;
			line-height: 1.875rem;
			font-size: 20px;
		}

		.text-content {
			margin-top: 1.875rem;
		}

		.main {
			width: 100%;
		}

		.module-text {
			line-height: 1.5625rem;
			font-size: 15px;
		}

		.close-icon {
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 0.9375rem;
			height: 0.9375rem;
			stroke: var(--clr-black);
		}
	}
	
	@media (max-width: 650px) {
		.module-container {
			width: 88.889vw;
			padding: 3.125rem 5.556vw 2.5rem;
		}

		.module-header {
			margin-bottom: 1.25rem;
		}

		.module-title {
			line-height: 1.25rem;
			font-size: 16px;
		}
	}
`