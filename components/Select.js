import { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

export default function SelectInput({ placeholderText, options, className, value, onChange }) {	 
	const style = {
		option: (provided, state) => ({
			...provided,
			fontWeight: state.isSelected ? '600' : '300',
			backgroundColor: state.isSelected ? 'var(--clr-primary-1)': 'transparent'
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			padding: 0,
			paddingRight: '1.5625rem',
			"span": {
				width: 0
			},
			"svg": {
				fill: 'var(--clr-black)',
				width: '1.25rem',
				height: '1.25rem'
		  	}
		}),
  
		control: (provided) => ({
			...provided,
			height: '2.5rem',
			minHeight: '2.5rem',
			borderRadius: 0,
			"span": {
				width: '0'
			}
		}),
		
		valueContainer: (provided) => ({
			...provided,
			fontSize: '16px',
			margin: 0,
			padding: 0,
			paddingLeft: '0.625rem'
		}),
		
		input: (provided) => ({
			...provided,
			fontSize: '16px',
			margin: 0,
			padding: 0
		})
	}

	return (
    	<Wrapper>
			<Select
				value={ value }
				onChange={ onChange }
				options={ options }
				placeholder={<p className="select-placeholder-text">{ placeholderText }</p>}
				className={ className }
				styles={ style } 
			/>
    	</Wrapper>
  	);
}

const Wrapper = styled.nav`
	.select-placeholder-text {
		font-size: 16px;
		color: var(--clr-black);
	}
`

