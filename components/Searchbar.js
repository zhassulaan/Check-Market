import React from 'react';
import styled from 'styled-components';

function SearchBar({ value, changeInput }) {
  	return (
		<Input
			type='text'
			id='text'
			placeholder='Введите здесь ключевые слова для поиска'
			value={value}
			onChange={changeInput}
		/>
  	);
}

const Input = styled.input`
	width: 35rem;
	height: 1.875rem;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	border: none;
	margin: auto 0;
	padding-left: 1.875rem;

	input::placeholder {
		font-size: 20px;
		color: var(--clr-primary-2);
	}

	@media (max-width: 992px) {
		width: 65.27778vw;
		border: 1px solid var(--clr-primary-4);
		padding: 0 2.5rem 0 0.625rem;
		font-size: 12px;

		input::placeholder {
			color: var(--clr-primary-4);
		}
	}
`
export default SearchBar;