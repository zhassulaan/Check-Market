import React from 'react';
import styled from 'styled-components';

function SearchBar({ value, onChange, text }) {
  	return (
		<Wrapper>
			<input
				type='search'
				id='search-form'
				name='search-form'
				placeholder={text}
				value={value}
				onChange={onChange}
			/>

			<div className='button search_icon'>
				<img src='/navbar-icons/search2.svg' alt='search button' />
			</div>
		</Wrapper>
  	);
}

const Wrapper = styled.section`
	display: flex;
	height: 100%;
	margin: auto 0;

	input {
		font-family: 'Open Sans', sans-serif;
		padding: 0 2.5rem 0 0.625rem;
		font-weight: 400;
	}

	.search_icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		background: var(--clr-primary-1);
		margin-left: -1.875rem;
	}
	
	.search_icon img {
		width: 1.25rem;
		height: 1.25rem;
	}
`
export default SearchBar;