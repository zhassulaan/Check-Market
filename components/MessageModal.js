import { useState, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';
import SuccessModal from './SuccessModal';
import Input from './Input';
import Button from './Button';

export default function MessageModal({ close, send }) {
	const [details, setDetails] = useState({ name: "", surename: "", phone: "", email: "", message: "" });
	const { state, dispatch } = useContext(Context);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	let disp = send;

	const successModal = async(ev) => {
		ev.preventDefault();
		setSuccess(!success);
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		if ((details.name === "") || (details.surename === "") || (details.email === "") || (details.message === "") || !details.email.includes("@")) {
			setError(true);
		}
		else {
			setError(false);
			dispatch({
				type: disp,
				payload: details,
			})
			successModal(e);
		}
	}

	return (
		<>
			{success ?
				<SuccessModal close={ close }/>
					:
				<Wrapper>
					<div className="form-container">
						<div className="form-header">
							<h2 className='form-title'>Задать нам вопрос</h2>
						</div>

						<form className='form-box' onSubmit={ handleSubmit }>
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
									placeholder={'Укажите свой e-mail '}
									value={details.email}
									onChange={e => setDetails({...details, email: e.target.value})}
									className={error ? "error-border" : "dafault-border"}
								/>
							</div>
							
							<div className="form-group">
								<div className="form-label">
									<label htmlFor="text">Что бы Вы хотели узнать/уточнить?</label>
								</div>
								<Input 
									type={"text"}
									name={"message"}
									id={"message"}
									placeholder={'Опишите Вашу проблему '}
									value={details.message}
									onChange={e => setDetails({...details, message: e.target.value})}
									ta={true}
									className={error ? "error-border" : "dafault-border"}
								/>
							</div>

							<div className="form-button">
								<Button text={"Отправить"}/>
							</div>
						</form>

						<div className='close-icon button' onClick={ close }>
							<svg viewBox="0 0 32 32" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1L30.9999 31" stroke-width="2"/>
								<path d="M31 1L1 31" stroke-width="2"/>
							</svg>
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

	.form-container {
		position: relative;
		width: 60.4167vw;
		background: var(--clr-white);
		font-family: 'Open Sans';
		font-style: normal;
		margin: 0 19.79167vw;
		padding: 3.125rem 3.75rem 5rem;
	}

	.form-header {
		position: relative;
		padding-bottom: 1.875rem;
		margin-bottom: 2.5rem;
	}

	.form-title {
		font-size: 30px;
		font-weight: 600;
		line-height: 3.125rem;
		color: var(--clr-primary-1);
	}
	
	.form-header:before {
		content: "";
		bottom: 0;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: var(--clr-primary-4);
	}

	.form-box {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form-group,
	.form-button {
		width: 35rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		margin-bottom: 1.25rem;
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
		width: 1.875rem;
		heigth: 1.875rem;
		top: 0;
		right: 0;
		margin-right: -6.875rem;
	}	

	@media (max-width: 1600px) {
		.form-group,
		.form-button {
			width: 30rem;
		}		
	}
	
	@media (max-width: 1280px) {
		.form-container {
			width: 75.806vw;
			margin: 0 12.0968vw;
			padding: 3.125rem 3.125rem 5rem;
		}

		.form-group,
		.form-button {
			width: 25rem;
		}

		.form-header {
			padding-bottom: 1.25rem;
			margin-bottom: 1.875rem;
		}

		.form-title {
			line-height: 2.1875rem;
			font-size: 24px;
		}

		.form-label {
			line-height: 1.5625rem;
			font-size: 16px;
		}

		.input-container {
			font-size: 15px;
		}

		.form-button {
			height: 3.125rem;
		}

		.form-button .text {
			font-size: 18px;
		}

		.close-icon {
			width: 1.5625rem;
			heigth: 1.5625rem;
			margin-right: -4.375rem;
		}	
	}
	
	@media (max-width: 768px) {
		padding: 1.875rem 0 6.25rem;

		.form-container {
			width: 88.889vw;
			border-radius: 0.625rem;
			margin: 0 5.556vw;
			padding: 3.125rem 5.556vw 2.5rem;
		}

		.form-group {
			width: 100%;
		}		
		
		.form-button {
			width: calc(100% - 27.77778vw);
		}

		.form-header {
			margin-bottom: 1.25rem;
		}

		.form-title {
			line-height: 1.25rem;
			font-size: 16px;
			text-align: center;
		}
		
		.form-header:before {
			height: 1px;
		}

		.form-button {
			height: 2.5rem;
			margin-top: 0;
		}
		
		.form-button .text {
			font-size: 13px;
		}

		.close-icon {
			width: 0.9375rem;
			heigth: 0.9375rem;
			margin: 1.25rem;
		}	

		.close-icon svg {
			width: 0.9375rem;
			heigth: 0.9375rem;
			stroke: black;
		}	
	}
`