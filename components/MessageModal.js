import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

export default function MessageModal() {
	const [details, setDetails] = useState({ name: "", surename: "", phone: "", email: "", message: "" });
	const [error, setError] = useState(false);
	console.log(error);
	
	const handleSubmit = e => {
		e.preventDefault();
		if ((details.name === "") || (details.surename === "") || (details.email === "") || (details.message === "") || !details.email.includes("@")) {
			setError(true);
		}
		else
			setError(false);
		// Signup(details, history);
	}

	return (
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
							placeholder={'Укажите адрес электронной почты '}
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

				{/* <img src={closeButton} alt="close button" className="button close-icon" onClick={handleClose}/> */}
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

	.form-container {
		// position: relative;
		width: 72.5rem;
		background: var(--clr-white);
		font-family: 'Open Sans';
		font-style: normal;
		margin: auto;
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
		margin-bottom: 1.875rem;
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
`