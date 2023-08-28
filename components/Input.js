import MaskedInput from 'react-text-mask'
import styled from 'styled-components';

function Input({ type, name, id, placeholder, mask, value, onChange, className, ta, basket }) {
  	return (
    	<Wrapper>
			{ mask !== undefined ?
				<MaskedInput
					type={ type }
					name={ name }			
					id={ id }
					placeholder={ placeholder }
					mask={ mask }
					value={ value }
					onChange={ onChange }
					className={ className }
				/>
					:
				( ta !== true ?
					<div className='input-container'>
						<input
							type={ type }
							name={ name }			
							id={ id }
							value={ value }
							onChange={ onChange }
							className={ className }
						/>
						<div class={ (value === "") ? "placeholder" : "delete" }>
							{placeholder}<span>*</span>
						</div>
					</div>
						:
					<div className='input-container'>
						<textarea 
							type={ type }
							name={ name }
							id={ id }
							value={ value }
							onChange={ onChange }
							className={ className }
						/>
						<div class={ (value === "") ? "placeholder" : "delete" }>
							{ placeholder }{basket !== true ? <span>*</span> : <span></span>}
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
		font-size: 15px;
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
		font-size: 15px;
		margin: auto;
	}

	.placeholder span {
		color: var(--clr-primary-1);
	}
	
	input {
		height: 2.375rem;
		padding: 0.5625rem 0.625rem 0.6875rem;
	}

	textarea {
		height: 8.75rem;
		padding: 0.5625rem 0.625rem 0.625rem;
	}
`

export default Input;
