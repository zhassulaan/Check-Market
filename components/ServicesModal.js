import { useState, useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Context } from '../context/Context';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubscribeModal from './SubscribeModal';
import SuccessModal from './SuccessModal';
import Input from './Input';
import Button from './Button';

export default function ServiceModal({ type, close }) {
	const { state, dispatch } = useContext(Context);
	const [details, setDetails] = useState({ type: type.text, name: "", surename: "", phone: "", email: "" });
	const [subscribeModal, setSubscribeModal] = useState(false);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	
	const subscribe = async(ev) => {
		ev.preventDefault();
		setSubscribeModal(!subscribeModal);
	}
	
	const successModal = async(ev) => {
		ev.preventDefault();
		setSuccess(!success);
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		if ((details.name === "") || (details.surename === "") || (details.email === "") || !details.email.includes("@")) {
			setError(true);
		}
		else {
			setError(false);
			dispatch({
				type: "SUBMIT_SERVICE_APPLICATION",
				payload: details,
			})
			successModal(e);
		}
	}

	function lcFirst(str) {
		if (!str) 
			return str;
		if (type.id == 1) {
			str = str.substr(0, type.text.indexOf(' '))
		}
	 
		return str[0].toLowerCase() + str.slice(1);
	}
	
	let content = null;
	if (type.id == 1)
		content = <div className="text-content">
			<p>Полное обеспечение бизнеса – от оптимизации и автоматизации управления магазином до поставок и внедрения торгового оборудования с программным обеспечением и обучением сотрудников под ключ.</p>
			<br />
			<p>Оптимизируйте работу Вашей компании от учета товаров и продаж, до контроля склада и логистики, вместе с нами.</p>
		</div>;

	else if (type.id == 2)
		content = <div className="text-content">
			<p>Полная автоматизация ресторанного бизнеса под ключ. От внедрения оборудования и программного обеспечения, до полного обучения ваших сотрудников. Повысим прозрачность ведения бизнеса на предприятии. Автоматизированное управление позволит снизить себестоимость блюд.</p>
			<br />
			<h6>Вы получите:</h6>
			<ul>
				<li><p>Снижение производственных затрат;</p></li>
				<li><p>Увеличение прибыли;</p></li>
				<li><p>Учет товаров и материалов</p></li>
				<li><p>Складской учет</p></li>
				<li><p>Работа с меню</p></li>
				<li><p>Учет продаж</p></li>
				<li><p>Станьте лучшим в своей сфере вместе с нами</p></li>
			</ul>
		</div>;

	else if (type.id == 3)
		content = <div className="text-content">
			<p>Доставим товарно-расходные материалы до двери. От противокражных ворот и датчиков, до кассовых аппаратов и чековых лент. Круглосуточная доставка.</p>
		</div>;

	else if (type.id == 4)
		content = <div className="text-content">
			<p>Обезопасьте свой бизнес с противокражными системами от ЧЕК МАРКЕТ</p>
			<br />
			<p>Обнаружение свыше 98%. Уникальная технология подавления ложного срабатывания</p>
			<p>Возможность монтирования счетчика посетителей напрямую на противокражную систему.</p>
			<p>Гарантия 12 месяцев.</p>
		</div>;

	else if (type.id == 5)
		content = <div className="text-content">
			<p>Получите статистику посещаемости. Счетчик подсчета посетителей является одним из лучших инструментов в маркетинговых исследованиях. Улучшите контроль за эффективностью работы персонала и увеличьте обороты на 42%.</p>
		</div>;

	else if (type.id == 6)
		content = <div className="text-content">
			<p>ТОРГСОФТ - лучшее программное обеспечение для ведения бизнеса. Контролируйте свой бизнес от склада до маркетинга. 11 лет на рынке, 190+ видеоуроков, понятный интерфейс и никаких доплат программистам для доработок.</p>
			<br />
			<p>Подробнее: <span>torgsoft.kz</span></p>
		</div>;

	return (
		<>
			{success ?
				<>
					{subscribeModal ?
						<SubscribeModal modal={ subscribe }/>
							:
						<>
							<Navbar/>
							<SuccessModal sender={ 1 } close={ close }/>
							<Footer modal={ subscribe }/>
						</>
					}
				</>
					:
				<Wrapper>
					<div className="module-container">
						<div className="module-header">
							<h2 className="module-title">{ type.text }</h2>
						</div>

						<div className={(type.id == 1) ? "form-header" : "form-header double-fh"}>
							<h4 className="form-title">Подать заявку на {lcFirst(type.text)}</h4>
						</div>

						<div className="service-box">
							{ content }

							<form className='form-content' onSubmit={ handleSubmit }>
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="text">ФИО:</label>
									</div>
									<Input 
										type={"text"}
										name={"name"}
										id={"name"}
										placeholder={'Имя '}
										value={details.name}
										onChange={e => setDetails({...details, name: e.target.value})}
										className={error ? "error-border" : "dafault-border"}
									/>
									<Input 
										type={"text"}
										name={"surename"}
										id={"surename"}
										placeholder={'Фамилия '}
										value={details.surename}
										onChange={e => setDetails({...details, surename: e.target.value})}
										className={error ? "error-border" : "dafault-border"}
									/>
								</div>
											
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="number">Телефон:</label>
									</div>
									<Input 
										type={"text"}
										name={"phone"}
										id={"phone"}
										placeholder={'+7 (___) ___-__-__'}
										mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
										value={details.phone}
										onChange={e => setDetails({...details, phone: e.target.value})}
										className={"dafault-border"}
									/>
								</div>
								
								<div className="form-group">
									<div className="form-label">
										<label htmlFor="email">E-mail:</label>
									</div>
									<Input 
										type={"text"}
										name={"email"}
										id={"email"}
										placeholder={'Укажите адрес электронной почты '}
										value={details.email}
										onChange={e => setDetails({...details, email: e.target.value})}
										className={error ? "error-border" : "dafault-border"}
									/>
								</div>
								
								<div className="form-button">
									<Button text={"Отправить заявку"}/>
								</div>
							</form>
						</div>

						<div className='close-icon button' onClick={ close }>
							<Image src='/modal/close.svg' alt="close button" width={30} height={30} />
						</div>
					</div>
				</Wrapper>
			}
		</>
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
		padding: 3.125rem 3.75rem 5.625rem;
	}

	.module-header {
		position: relative;
		padding-bottom: 1.875rem;
		margin-bottom: 1.875rem;
	}

	.module-title {
		font-size: 30px;
		font-weight: 600;
		line-height: 3.125rem;
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

	.form-header {
		padding-left: 33.75rem;
		margin-bottom: 1.25rem;
	}

	.double-fh {
		padding-left: 33.75rem;
		margin-bottom: 1.875rem;
	}

	.double-fh .form-title {
		line-height: 2.1875rem;
	}
	
	.form-title {
		line-height: 3.125rem;
		font-size: 24px;
	}

	.service-box {
		display: flex;
	}

	.text-content,
	.form-content {
		margin-right: 2.5rem;
	}

	.text-content {
		width: 31.25rem;
	}

	.text-content h6 {
		font-size: 20px;
		font-weight: 600;
	}

	.text-content ul {
		list-style-type: disc;
		margin-left: 1.25rem;
	}

	.text-content span {
		color: var(--clr-primary-1);
	}

	.form-content {
		width: 28.75rem;
	}
	
	.form-group,
	.form-button {
		width: 100%;
	}

	.form-group {
		padding-bottom: 1.25rem;
	}

	.form-label {
		font-size: 18px;
		font-weight: 600;
		line-height: 1.875rem;
	}

	.error-border {
		border: 1px solid red;
	}

	.dafault-border {
		border: 1px solid var(--clr-primary-4);
	}

	.form-button {
		height: 4.375rem;
		margin-top: 0.625rem;
	}
	
	.form-button .text {
		font-size: 20px;
		font-weight: 700;
	}

	.close-icon {
		position: absolute;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	
`