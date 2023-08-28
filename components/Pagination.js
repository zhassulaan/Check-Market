import styled from 'styled-components';

const Pagination = ({ pageNumbers, currentPage, paginate }) => {
  	return (
    	<Wrapper>
      	<ul className='pagination'>
				{ (currentPage > 1)	?
					<a href={`${currentPage - 1}`} id={currentPage - 1} onClick={() => paginate}>
						{ (window.innerWidth > 992) ? 
							<p className='previous button'>Предыдущая</p>
								:
							<img src='/catalog-icons/previous.svg' alt='previous button' className='previous button' />
						}
					</a>
						:
					(window.innerWidth > 992) ? 
						<p className='previous button'>Предыдущая</p>
							:
						<img src='/catalog-icons/previous.svg' alt='previous button' className='previous button' />
				}
				
				{pageNumbers.map(number => (
          		<li key={number} className={currentPage === number ? 'button selected' : 'button link'}>
            		<a href={`${number}`} id={number} onClick={() => paginate}>
              			<p>{number}</p>
            		</a>
          		</li>
        		)) }

				{ (currentPage < pageNumbers.length) ?
					<a href={`${currentPage + 1}`} id={currentPage + 1} onClick={() => paginate}>
						{ (window.innerWidth > 992) ? 
							<p className='next button'>Следующая</p>
								:
							<img src='/catalog-icons/next.svg' alt='next button' className='next button' />
						}
					</a>
						:
					(window.innerWidth > 992) ? 
						<p className='next button'>Следующая</p>
							:
						<img src='/catalog-icons/next.svg' alt='next button' className='next button' />
				}
      	</ul>
    	</Wrapper>
  	);
};

const Wrapper = styled.nav`
	position: relative;
	
	.pagination {
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3.125rem;
		margin-top: 5.625rem;
	}

	.link {
		width: 1.875rem;
		height: 1.875rem;
		font-weight: 400;
		cursor: pointer;
		margin: 0 .625rem;
	}

	li a {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	p {
		font-weight: 400;
	}

	.previous,
	.next {
		width: 10rem;
		height: 1.875rem;
		text-decoration: underline;
		margin: 0 3.75rem;
	}
	
	.previous {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
		
	.next {
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
		
	.selected {
		width: 3.125rem;
		height: 3.125rem;
		background-color: var(--clr-primary-4);
		border-radius: 5px;
		margin: 0 .3125rem;
	}

	.selected p {
		font-weight: 600;
	}

	@media (max-width: 1220px) {
		.pagination {
			height: 2.8125rem;
		}
	
		.previous,
		.next,
		.link p,
		.selected p {
			font-size: 19px;
		}
	
		.selected {
			width: 2.8125rem;
			height: 2.8125rem;
		}
	}

	@media (max-width: 992px) {
		.pagination {
			height: 2.5rem;
			margin-top: 4.375rem;
		}
	
		.previous,
		.next,
		.link p,
		.selected p {
			font-size: 17px;
		}
	
		.selected {
			width: 2.5rem;
			height: 2.5rem;
		}
	}

	@media (max-width: 768px) {
		.pagination {
			margin-top: 2.5rem;
		}

		.selected {
			margin: 0 0.625rem;
		}

		.link p,
		.selected p {
			font-size: 16px;
		}
	
		.previous,
		.next {
			width: 0.625rem;
			margin: 0 2.5rem;
		}
	}

	@media (max-width: 650px) {
		.link p,
		.selected p {
			font-size: 15px;
		}

		.previous,
		.next {
			margin: 0 1.25rem;
		}
	}
`

export default Pagination;
