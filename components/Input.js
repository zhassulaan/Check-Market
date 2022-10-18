import MaskedInput from 'react-text-mask'
import styled from 'styled-components';

function Input({ type, name, id, placeholder, mask, value, onChange, className, ta }) {
  	return (
    	<Wrapper>
			{ mask !== undefined ?
				<MaskedInput
					type={type}
					name={name}			
					id={id}
					placeholder={placeholder}
					mask={mask}
					value={value}
					onChange={onChange}
					className={className}
				/>
					:
				( ta !== true ?
					<div className='input-container'>
						<input
							type={type}
							name={name}			
							id={id}
							value={value}
							onChange={onChange}
							className={className}
						/>
						<div class={(value === "") ? "placeholder" : "delete"}>
							{placeholder}<span>*</span>
						</div>
					</div>
						:
					<div className='input-container'>
						<textarea 
							type={type}
							name={name}
							id={id}
							value={value}
							onChange={onChange}
							className={className}
						/>
						<div class={(value === "") ? "placeholder" : "delete"}>
							{placeholder}<span>*</span>
						</div>
					</div>
				)
			}
    	</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.input-container {
		position: relative;
	}

	input, 
	textarea {
		width: 100%;
		font-family: 'Open Sans';
		font-style: normal;
		font-size: 16px;
		font-weight: 300;
		::placeholder {
			color: var(--clr-black);
		}
		margin-top: 0.625rem;
	}

	.delete {
		display: none;
	}

	.placeholder {
		position: absolute;
		color: var(--clr-primary-5);
		pointer-events: none;
		top: 19px;
		left: 11px;
		margin: auto;
	}

	.placeholder span {
		color: red;
	}
	
	input {
		height: 2.5rem;
		padding: 9px 10rem 11px 0.625rem;
	}

	textarea {
		height: 8.75rem;
		padding: 9px 0.625rem 10px;
	}
`

export default Input;